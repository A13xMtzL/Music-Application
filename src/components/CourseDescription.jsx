import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CourseDescription({course}) {
  const [showScrollBar, setShowScrollBar] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: showScrollBar ? 1 : 0 });
  }, [showScrollBar]);

  return (
    <div className="text-white rounded-lg shadow-sm p-6 relative">
      <h1 className="flex items-start ml-4 text-3xl font-bold text-orange-600 mb-3">¿Qué aprenderás?</h1>
      <div
        className="overflow-y-auto h-64 no-scrollbar"
        onMouseEnter={() => setShowScrollBar(true)}
        onMouseLeave={() => setShowScrollBar(false)}
      >
        <motion.div
          className="absolute right-0 top-0 bg-gray-700 w-2 h-full opacity-0"
          animate={controls}
        />
        <p className="text-base leading-relaxed tracking-wide text-start p-2">
          {course.description}
        </p>
      </div>
    </div>
  );
}
