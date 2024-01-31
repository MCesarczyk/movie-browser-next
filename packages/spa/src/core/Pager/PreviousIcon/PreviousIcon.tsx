import styled, { css } from "styled-components";
import { ReactComponent as Previous } from "./prev.svg";
import clsx from "clsx";

interface PreviousIconProps {
    disabled: boolean;
};

export const PreviousIcon = ({ disabled }: PreviousIconProps) => (
    <Previous className={clsx('mr-2 text-blue-500 my-0 mx-[2px] w-1 h-2', disabled && 'text-slate-700')} />
);

export const Icon = styled(Previous) <{ disabled: boolean }>`
    margin-right: 8px;
    color: ${({ theme }) => theme.color.scienceBlue};

    ${({ disabled }) => disabled && css`
    color: ${({ theme }) => theme.color.darkGrey};
    `}
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin: 0px 2px;
        width: 5px;
        height: 8px;
    }    
`;
