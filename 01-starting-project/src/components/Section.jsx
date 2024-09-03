export default function Section({title, children, ...props}) { {/*collect all props and merge into props object*/}
    return(
        <section {...props}> {/*the props in the function is forworded to build in section component*/}
            <h2>{title}</h2>
            {children}
        </section>
    );
}