import { useQuery } from "react-query";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

const PriceData = styled.div`
`;
const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 12px;
  font-weight: 400;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface IPriceProps {
  coinId: string;
  isDark: boolean;
}

function Price({ coinId, isDark }: IPriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <PriceData>
          <PriceItem>
            <span>고가</span>
            <span>${data?.quotes.USD.ath_price.toFixed(3)}</span>
          </PriceItem>
          <PriceItem>
            <span>현재가</span>
            <span>${data?.quotes.USD.price.toFixed(3)}</span>
          </PriceItem>
        </PriceData>
      )}
    </div>
  );
}

export default Price;
