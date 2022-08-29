import styles from "./Card.module.scss";

/** Пропсы, которые принимает компонент Card */
type CardProps = {
    /** URL изображения */
    image: string;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    price: number;
    change_price: number;
};

const Card: React.FC<CardProps> = ({ image, title, subtitle, content, price, change_price, onClick }) => {
    const numberToString = (amount: number): string => {
        // console.log(amount)
        if (!isNaN(amount)) {
            const numberString = amount.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 });
            return numberString;
        } else {
            return '0.00';
        }
    }

    return (
        <div className={styles.card} onClick={onClick} >
            <div className={styles.card_title}>
                <img src={image} className={styles.card_img} />
                <div className={styles.title}>
                    <div className={styles.title1}>{title} </div>
                    <div className={styles.title2}>{subtitle} </div>
                </div>
            </div>
            <div className={styles.price}>
                <div className={styles.price_number}>$ {numberToString(price)}</div>
                <div className={change_price > 0 ? styles.up : styles.down}>{Math.round(change_price)}% </div>
            </div>
        </div>
    );
}

export default Card;