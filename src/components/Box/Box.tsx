import { Link } from "react-router-dom";
import styles from "./Box.module.scss";

type BoxProps = {
    imageSmall: string;
    imageLarge: string;
    title: string;
    symbol: string;
    favorite: boolean;
    data: any;
    onClick?: React.MouseEventHandler;
};

const Box: React.FC<BoxProps> = ({ imageSmall, imageLarge, title, symbol, favorite = false, data, ...additionalProps }) => {
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
        <div>
            <Link to={'/'} >
                Back
            </Link>
            <div className={styles.box_header}>
                <img className={styles.box_img} src={imageLarge} alt="" />
                <div className={styles.box_title}>{title}</div>
                <div className={styles.box_symbol}>({symbol})</div>
            </div>

            <div className={styles.current_numbers}>
                <div className={styles.current_price}>${numberToString(data.market_data.current_price.usd)}</div>
                <div className={data.market_data.price_change_24h > 0 ? styles.up_price : styles.down_price}>{numberToString(data.market_data.price_change_24h)}</div>
            </div>

            <div className="description">
                <div>
                    High: {data.market_data.high_24h.usd}
                </div>
                <div>
                    Low: {data.market_data.low_24h.usd}
                </div>
            </div>


        </div >
    )
}

export default Box;