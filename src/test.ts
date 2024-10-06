type TInstrumentType = 'kick' | 'snare' | 'cymbal' | 'hi-hat' | 'crash' | 'tom1' | 'tom2' | 'tom3';
type TNoteDuration = '1/2' | '1/4' | '1/8' | '1/16' | '1/32';
type TArticulation = 'R' | 'L';
type TOrnament = 'flam' | 'drag';

export type TNoteGroup = 'single' | 'pair' | 'triplet' | 'quadruplet' | 'quintuplet' | 'sextuplet' | 'tied' | 'mixed' | 16;

export interface IDrumNote {
    instrument: TInstrumentType;    // Тип инструмента
    duration: TNoteDuration;        // Длительность
    isPause: boolean;               // Пауза
    accent?: boolean;               // акцент
    articulation?: TArticulation;   // аппликатура
    ghost?: boolean;                // Призрачная нота
    grouped: TNoteGroup;            // Нота в группе других нот
    groupIndex?: number;            // Порядковый номер в группе
    groupTotal?: number;            // Общее количество нот в группе
    offset?: number;                // Смещение по времени (в миллисекундах)
    dynamics?: string;              // Динамика (например, 'p', 'f')
    description?: string;           // Текстовое описание
    isActive?: boolean;             // Состояние (активная или неактивная нота)
    timestamp?: number;             // Временная метка начала звучания
    ornament?: TOrnament;           // Орнамент
    abbreviation?: 1 | 2 | 3;       // Сокращение ноты 1,2,3 черты
}