import * as React from 'react'

export interface IWideBlockProps {
    style?: React.CSSProperties
}

export const WideBlock: React.FC<IWideBlockProps> = props => (
    <div style={props.style}>
        <style jsx>{`
            div {
                position: relative;
                width: 100vw;
                margin-left: -50vw;
                left: 50%;

                overflow-x: hidden;
            }
        `}</style>

        {props.children}
    </div>
)
