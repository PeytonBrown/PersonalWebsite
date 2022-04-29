---
title: Crypto Discord Bot
description: Simple discord bot to retrieve the updated price of crypto currencies.
slug: CryptoBot
createdAt: '2021-05-19'
img: blog-1.jpg
---

# Crypto Discord Bot

## A simple discord bot to retrieve the updated price of crypto currencies.

Now that crypto has made its way into the mainstream it has become a part of regular discussion amongst my friends and I.
There are new coins being created every day and keeping track of them can become tedious.
I wanted a centralized location where I could check up-to-date prices. 
The best place for this would be something like the Coinbase app which has the feature front and center but I didn't want another app I would have to check.

The best solution would be using a bot for discord as this is an app regularly used by me and friends and often a place where these discussions occur.
When looking online for other discord bots to give updates on current crypto prices I only found bots that acted as an 
alert system sending you a message every time a price fluctuated.
However, in my case, I was not interested in being notified.
This led me to create my own which would grab relevant data about current crypto prices and display it
in a constantly updating message at the top of a channel so it is easy to locate and discuss.

![Updated Message](https://github.com/PeytonBrown/Crypto-Bot/blob/main/imgs/updated_message.png?raw=true)

## How it works

The first issue to solve is where do I get the data of currently up to date crypto prices.
In my research, I found a site called CoinGecko which offers a very nice API to retrieve data on different crypto coins.
This database contains over 10,000 coins and tons of data associated with these coins.
Because of this large amount of data, it is not smart for us to call the API for every coin not to mention every different server the bot is a part of.
Most servers will only care about the main coins such as Bitcoin, Ethereum, and Doge. 

My solution is to first store a list of the unique coins that are needed to be updated.
Then every 5 minutes the API is called to grab information regarding these specific coins. This data is cached and then we go through each server's specific settings and grab the relevant coin data for each server.
This put a minimal amount of stress on the host API as well as made our bot update information as quickly as possible.

```js
async function updateCache()
{
    var CoinCache = JSON.parse(fs.readFileSync('./data/CoinCache.json'));

    for (const Coin of CoinCache.UpdateList) {
        var response = null;

            try 
            {
                response = await CoinGeckoClient.coins.fetch(Coin, {});
            } 
            catch (error)
            {
                console.error(error);
                continue;
            }


            if ( response == null || response.success == false)
                continue;

            CoinCache.Coins[Coin] = response.data;

    };

    fs.writeFileSync('./data/CoinCache.json', JSON.stringify(CoinCache));

}
```


Another small addition is support for different currencies as well as timezones to accommodate people worldwide.

The source code is available on my github [HERE](https://github.com/PeytonBrown/Crypto-Bot)