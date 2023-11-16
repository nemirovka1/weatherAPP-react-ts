import React from 'react'
interface SearchListProps {
    history: string[];
    isInputFocused: boolean;
    handleHistoryItemClick: (selectedOption: string) => void;
    removeFromHistory: (city: string) => void;
    lastRemovedCity: string | null
    undoRemove: (city: string) => void;
}

export const HistoryCityList: React.FC<SearchListProps> = ({ history, isInputFocused, handleHistoryItemClick, removeFromHistory, undoRemove, lastRemovedCity }) => (
    <ul className="search_dropdown">
        {history.map((city, index) => (
            <li key={index}>
                <div className="history_item">
                    <div
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onClick={() => handleHistoryItemClick(city)}
                    >
                        <p>{city}</p>
                    </div>
                    <span
                        className="dropdown-deleteBtn"
                        onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onClick={() => removeFromHistory(city)}
                    >
                     &#10006;
                 </span>
                </div>
            </li>
        ))}
        {lastRemovedCity && (
            <span className="history_item_undo"
                onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onClick={() => undoRemove(lastRemovedCity)}>
                        Undo {lastRemovedCity}
            </span>
        )}
    </ul>
)
