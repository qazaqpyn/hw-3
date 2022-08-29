import Box from "@components/Box";
import Card from "@components/Card";
import Loading from "@components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Coin.module.scss";

type MyParams = {
    id: string;
};

const Coin = () => {
    const { id } = useParams<keyof MyParams>() as MyParams;
    const [coin, setCoin] = useState<any>();

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: `https://api.coingecko.com/api/v3/coins/${id}`
            });
            setCoin(result.data);
        }
        fetch();
    }, []);


    return (
        //add loading
        <div className={styles.coin_div}>
            <div className={styles.loading}>
                {!coin && <Loading />}
            </div>
            <div>
                {coin && <Box imageSmall={coin.image.small} imageLarge={coin.image.large} title={coin.name} symbol={coin.symbol} favorite={false} data={coin} />}
            </div>
        </div>
    );
}

export default Coin;