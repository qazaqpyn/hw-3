import Card from "@components/Card";
import Input from "@components/Input";
import Loading from "@components/Loading";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from './Home.module.scss';


const Home = () => {
    const [coins, setCoins] = useState<any[]>([]);
    const [filteredCoins, setFilteredCoins] = useState<any[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const result = await axios({
                method: 'get',
                url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
            });
            setCoins(result.data);
            setFilteredCoins(result.data);
        }
        fetch();
    }, []);

    const navigate = useNavigate();

    const navigateTo = (id: string) => {
        navigate(`/coin/${id}`);
    }

    const filterList = (value: string) => {
        // console.log(value);
        // if (value != '') {
        //     setFilteredCoins(coins.filter(coin => coin.name.toLowerCase().includes(value) || coin.symbol.toLowerCase().includes(value)));
        // } else {
        //     console.log('hi')
        //     setFilteredCoins(coins);
        // }
    }

    return (
        <div className={styles.main_class}>
            <>
                <Input value={""} onChange={(value) => filterList(value)} />
                {filteredCoins && filteredCoins.map((coin: any) =>
                    <Card key={coin.id} image={coin.image} title={coin.name} subtitle={coin.symbol} change_price={coin.price_change_24h} onClick={() => navigateTo(coin.id)} price={coin.current_price} />
                )}
            </>
        </div>
    );
}

export default Home;

