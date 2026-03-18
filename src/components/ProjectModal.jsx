import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
    const [imgIndex, setImgIndex] = useState(0);
    
    useEffect(() => { setImgIndex(0); }, [project]);
  
    if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            {/* Close button */}
            <button onClick={onClose} className="text-gray-400 hover:text-white float-right text-xl">✕</button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 mb-6">{project.description}</p>

            {/* Image Carousel */}
            <div className="relative mb-6">
                <img src={project.images[imgIndex]} alt={project.title} className="w-full h-64 object-contain rounded-lg"/>

                {project.images.length > 1 && (
                    <>
                        <button onClick={() => setImgIndex((imgIndex - 1 + project.images.length) % project.images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 hover:bg-black/70">
                            ‹
                        </button>
                        <button onClick={() => setImgIndex((imgIndex + 1) % project.images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-8 h-8 hover:bg-black/70">
                            ›
                        </button>
                    </>
                )}
            </div>
            {/* Link to repo */}
            <a href={project.link} target="_blank" rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors">
                View on GitHub →
            </a>
        </div>
    </div>
  );
}