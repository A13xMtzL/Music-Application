import React from 'react';
import { Link } from 'react-router-dom';

export default function AllCourses() {
  const courses = [
    { title: 'Guitarra', path: "guitar", description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: 'https://i.pinimg.com/originals/97/61/f7/9761f730391cfea82170cb9cc7646887.jpg' },
    { title: 'Piano', path: "piano", description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://images3.alphacoders.com/133/1338175.png' },
    { title: 'Acordeón', path: "accordion", description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', image: 'https://i.pinimg.com/originals/86/2c/67/862c67c79233062f31cb857ffb36df7b.jpg' },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <Link to={`/${course.path}`} key={index}>
          <div className="course-card rounded-lg overflow-hidden shadow-lg bg-[#0d1321] hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img className="w-full h-56 object-cover" src={course.image} alt={course.title} />
            <div className="p-6">
              <div className="font-bold text-xl mb-2">{course.title}</div>
              <p className="text-gray-400 text-base">{course.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}