import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Exersise >
                <Component />
                <Component />
                <Component />
            </Exersise>
        </CollapseWrapper>
    );
};

const Exersise = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { ...child.props, index });
    });
};
// Как пролучить доступ к содержимому div без использования props ?????
// eslint-disable-next-line react/prop-types
const Component = ({ index }) => {
    return <div>Компонент списка {index}</div>;
};

export default ChildrenExercise;
