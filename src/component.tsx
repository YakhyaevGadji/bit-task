import { useState } from 'react';
import * as ST from './styled.ts';

interface IOption {
    label: string;
    value: string;
}

interface IOptionsProps {
    options: IOption[];
    onChange: (value: string) => void;
    label: string
}

const Options = ({ options, onChange, label }: IOptionsProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<IOption | null>(null);

    const handleOptionClick = (option: IOption) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option.value);
    };

    return (
        <ST.DropdownContainer>
            <ST.DropdownHeader onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? selectedOption.label : label}
            </ST.DropdownHeader>
            {isOpen && (
                <ST.DropdownList>
                    {options.map((option) => (
                        <ST.DropdownItem key={option.value} onClick={() => handleOptionClick(option)}>
                            {option.label}
                        </ST.DropdownItem>
                    ))}
                </ST.DropdownList>
            )}
        </ST.DropdownContainer>
    );
};

export default Options;