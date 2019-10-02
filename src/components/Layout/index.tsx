import * as React from 'react'

export const Layout: React.FC = props => {
    return (
        <main>
            <style jsx>{`
                main {
                    display: flex;
                    flex-direction: column;

                    align-items: center;

                    padding: 0;
                }

                .wrapper {
                    width: 70%;
                }
            `}</style>

            <div className={'wrapper'}>
                {props.children}
            </div>
        </main>
    )
}
