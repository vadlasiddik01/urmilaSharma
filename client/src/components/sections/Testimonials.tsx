import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Deeksha sharma",
    role: "Patient",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "I would like to commend your entire staff for their exceptional kindness, compassion, and professionalism. From the reception to everyone made me feel comfortable and at ease. Their warm smiles and gentle manner put me at ease during what could have been a nervous experience.Please extend my appreciation to each and every one of them. Your team truly exemplifies the highest standards of medical care and customer service. Thank you once again for helping us start this new chapter in our lives. We're grateful for your ongoing care and guidance throughout my pregnancy.",
    rating: 5
  },
  {
    id: 2,
    name: "Suman yadav",
    role: "Patient",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "Its been a great experience at Ishwa ivf. Dr. Urmila Sharma maam is extremely skilled and very kind and compassionate. The way she treats patients is very nice. The center is very nice and clean . The whole process of ivf becomes smooth at ishwa ivf. The staff is friendly.",
    rating: 5
  },
  {
    id: 3,
    name: "Vijay sharma",
    role: "Patient",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    quote: "Dr Urmila Sharma is a highly skilled doctor for IVF . Please i highly recommend her for infertility treatment. Her results are almost 100%. She is very humble and soft spoken. Not only me but 2 of my knowns also got healthy babies with the help of her.",
    rating: 5
  } 
];

export function Testimonials() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="testimonials"
      className="py-8 sm:py-10 md:py-12 bg-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading
          subHeading="TESTIMONY"
          heading="What Our Patient Say About Us"
          description="Our patients share their experiences with our healthcare services and dedicated medical team."
          centered
        />
        
        {/* Mobile scrollable version for small screens */}
        <div className="md:hidden mt-8 relative overflow-hidden">
          <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory scrollbar-hide">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl border-2 border-transparent shadow-sm p-5 relative overflow-hidden flex-shrink-0 w-[280px] snap-center transition-all duration-300 hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center text-yellow-400 mb-3">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <FaStar key={i} className="mx-0.5 text-sm" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-center italic mb-3 text-sm line-clamp-3">"{testimonial.quote}"</p>
                
                <div className="text-center">
                  <h4 className="font-bold text-base text-secondary">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Shadow effects for horizontal scroll indication */}
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        </div>
        
        {/* Desktop grid version for medium screens and up */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl border-2 border-transparent shadow-sm p-6 relative overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img 
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex justify-center text-yellow-400 mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <FaStar key={i} className="mx-0.5" />
                ))}
              </div>
              
              <p className="text-gray-700 text-center italic mb-4 line-clamp-4">"{testimonial.quote}"</p>
              
              <div className="text-center">
                <h4 className="font-bold text-lg text-secondary">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
