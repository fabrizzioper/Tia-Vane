import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const SearchResults = ({ searchTerm = "", resultCount = 0 }) => {
  return (
    <div className="w-full">
      {/* Primera fila: texto de resultados */}
      <div className="w-full">
        <span className="text-sm text-gray-600">
          Resultados de búsqueda para
        </span>
      </div>

      {/* Segunda fila: término y controles */}
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <h2 className="text-2xl font-medium">
            {searchTerm} <span className="text-gray-600">({resultCount})</span>
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors text-sm">
          <span>Ocultar Filtros</span>
            <SlidersHorizontal className="w-4 h-4" />
            
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors text-sm">
            <span>Ordenar por</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default SearchResults;