import React from 'react';
import styles from './Product.module.css';
import { Button, IconButton } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneIcon from '@mui/icons-material/Done';
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Product: React.FC = () => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.breadcrumb}>
                Home &gt; Shoes &gt; New Balance &gt; New Balance 530 White Silver Navy
            </div>
            <div className={styles.productContent}>
                <div className={styles.imageContainer}>
                    <img src="/new-balance-530.jpg" alt="New Balance 530" />
                </div>
                <div className={styles.productDetails}>
                    <div className={styles.icons}>
                        <IconButton>
                            <ShareIcon />
                        </IconButton>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                    </div>
                    <h1>New Balance 530 White Silver Navy</h1>
                    <p>New Balance | MR530SG</p>
                    <div className={styles.pricing}>
                        <p>Starting from ฿ 3,990</p>
                        <p>Highest bid ฿ 4,100</p>
                        <p>Last sale ฿ 4,050</p>
                    </div>
                    <div className={styles.shippingMethod}>
                        <h2>Shipping Method <InfoIcon /></h2>
                        <div className={styles.method}>
                            <LocalShippingIcon /> Same day delivery
                        </div>
                        <div className={styles.method}>
                            <DoneIcon /> Standard delivery
                        </div>
                    </div>
                    <div className={styles.guarantee}>
                        <p><DoneIcon /> 100% Authentic Guarantee</p>
                        <p><DoneIcon /> Anti Fraudulent transaction</p>
                    </div>
                    <div className={styles.actions}>
                        <Button variant="contained" color="primary" className={styles.sellButton}>SELL</Button>
                        <Button variant="contained" color="success" className={styles.buyButton}>BUY</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
