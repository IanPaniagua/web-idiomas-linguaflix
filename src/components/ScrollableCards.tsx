import React from 'react';

interface ScrollableCardsProps {
  title: string;
  items: {
    id: string;
    title: string;
    image: string;
    level: string;
    category: string;
  }[];
}

export default function ScrollableCards({ title, items }: ScrollableCardsProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const scrollCards = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = direction === 'left' ? -300 : 300;
        
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    // Añadir los event listeners a los botones
    const leftButton = document.querySelector('.scroll-left');
    const rightButton = document.querySelector('.scroll-right');

    if (leftButton) {
      leftButton.addEventListener('click', () => scrollCards('left'));
    }

    if (rightButton) {
      rightButton.addEventListener('click', () => scrollCards('right'));
    }

    // Limpiar los event listeners cuando el componente se desmonte
    return () => {
      if (leftButton) {
        leftButton.removeEventListener('click', () => scrollCards('left'));
      }
      if (rightButton) {
        rightButton.removeEventListener('click', () => scrollCards('right'));
      }
    };
  }, []);

  return (
    <div className="relative mb-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="relative group">
        {/* Botón izquierdo */}
        <button 
          className="scroll-left absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Scroll left">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Contenedor de scroll */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide px-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-6 py-2">
            {items.map((item) => (
              <a 
                key={item.id} 
                href={`/lesson/${item.id}`} 
                className="flex-shrink-0 w-[300px] block"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Botón derecho */}
        <button 
          className="scroll-right absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Scroll right">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 