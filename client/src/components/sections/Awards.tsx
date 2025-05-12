import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";

// Define award data structure
interface Award {
  id: number;
  value: string;
  numValue: number; // Numerical value for counting animation
  label: string;
  suffix?: string; // Optional suffix like "%" or "+"
}

const awards: Award[] = [
  {
    id: 1,
    value: "25000+",
    numValue: 25000,
    label: "Happy Patients",
    suffix: "+"
  },
  {
    id: 2,
    value: "7000+",
    numValue: 7000,
    label: "IVF Procedures",
    suffix: "+"
  },
  {
    id: 3,
    value: "17+",
    numValue: 17,
    label: "Year Experience",
    suffix: "+"
  },
  {
    id: 4,
    value: "5000+",
    numValue: 5000,
    label: "Fertility Enhancing Surgeries",
    suffix: "+"
  }
];

// Component for animated counter
function AnimatedCounter({ 
  value, 
  suffix, 
  isInView, 
  className 
}: { 
  value: number; 
  suffix?: string; 
  isInView: boolean; 
  className?: string;
}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      // First set to 0
      setCount(0);
      
      // Animation duration faster for smaller numbers
      const duration = Math.min(1000, Math.max(500, value * 20));
      const end = value;
      
      // if value <= 30, increment by 1
      // if value > 30 && < 100, increment faster
      const incrementBy = value > 30 ? (value > 100 ? 5 : 2) : 1;
      
      const timer = setInterval(() => {
        start += incrementBy;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, duration / (end / incrementBy));
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);
  
  return (
    <span className={className}>
      {count}{suffix || ''}
    </span>
  );
}

export function Awards() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="awards"
      className="py-8 sm:py-10 md:py-12 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          subHeading="AWARDS"
          heading="Our Doctor Specialist & Experience"
          centered
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 mt-10">
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className="bg-white rounded-xl shadow-sm p-6 border border-primary/10 text-center hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                delay: award.id * 0.1
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
             <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent min-w-0 overflow-hidden">
                <AnimatedCounter 
                  value={award.numValue} 
                  suffix={award.suffix} 
                  isInView={isIntersecting}
                  className="font-extrabold text-nowrap"
                />
              </h3>
              <p className="text-gray-600 font-medium">{award.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
