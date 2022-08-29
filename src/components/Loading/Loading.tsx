import React from "react";
import logo from "./assets/Loader.svg";
import styles from "./Loading.module.scss"

export enum LoaderSize {
    s = 's',
    m = 'm',
    l = 'l'
}

type LoaderProps = {
    /**
     * Размер лоадера. При передаче данного пропса, должен добавляться css-класс loader_size-{size}
     * По умолчанию: размер - LoaderSize.m, css-класс - loader_size-m
     */
    size?: LoaderSize;
    /**
     * Дополнительные CSS-классы.
     */
    className?: string;
};

const Loading: React.FC<LoaderProps> = ({ size = LoaderSize.l, className }) => {
    return (
        <>
            <img className={styles.loader_size_l} src={logo} />
        </>
    );
}
export default Loading;