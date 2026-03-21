import { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
    const [imgIndex, setImgIndex] = useState(0);
    
    useEffect(() => { setImgIndex(0); }, [project]);
  
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()} className="bg-gray-900 border border-white/10 rounded-2xl max-w-3xl w-full mx-4 max-h-[85vh] overflow-hidden flex flex-col" style={{ boxShadow: "0 0 80px rgb(251, 191, 35, 0.2)" }}>

            {/* Image Carousel */}
            <div className="relative mb-0 bg-black rounded-t-2xl overflow-hidden">
                {/* Close button */}
                <button onClick={onClose} className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors z-10">✕</button>
                <img src={project.images[imgIndex]} alt={project.title} className="w-full h-80 object-contain rounded-lg"/>

                {project.images.length > 1 && (
                    <>
                        <button onClick={() => setImgIndex((imgIndex - 1 + project.images.length) % project.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-lg">
                            ‹
                        </button>
                        <button onClick={() => setImgIndex((imgIndex + 1) % project.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-lg">
                            ›
                        </button>
                    </>
                )}

                {project.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, i) => (
                        <button key={i} onClick={() => setImgIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${i === imgIndex ? "bg-amber-400" : "bg-white/30"}`} />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-6">

                {/* Title */}
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                    <span key={tag} className="text-xs border border-amber-400/30 text-amber-400 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Link to repo */}
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-amber-400/10 border border-amber-400/30 text-amber-400 rounded-full hover:bg-amber-400/20 transition-colors text-sm">
                    View on GitHub →
                </a>
            </div>
        </div>
    </div>
  );
}