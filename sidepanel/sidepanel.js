//
const TODAY_RANKING_ENPOINT =
  "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?start=1&limit=200";
const HISTORICAL_RANKING_ENPOINT =
  "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listings/historical?start=1&limit=200";

/**
 * Build weekly cryptocurrency list by Market Cap from the specified date.
 *
 * @param {Date} startDate - The starting date to begin fetch the lists.
 */
function buildHistoricalList(startDate) {
  const $historicalRankingList = $("#historicalRankingList");

  const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
  let currentDate = new Date(startDate);

  while (currentDate <= new Date()) {
    const formattedDate = currentDate.toISOString().slice(0, 10);

    const listItemHeader = `<li class="collection-header"><h6>${formattedDate}</h6></li>`;
    // $historicalRankingList.append(listItemHeader);
    $.getJSON(
      `${HISTORICAL_RANKING_ENPOINT}&date=${formattedDate}`, function (response) {
        $.each(response.data, function (index, crypto) {
          console.log(`ddssd, ${crypto.name}`)
          const listItem = `<li class="collection-item">${crypto.name}</li>`;
          $historicalRankingList.append(listItem);
        });
      }
    );
    currentDate = new Date(currentDate.getTime() + oneWeekInMillis);
  }
}

/**
 * Build today's Cryptocurrency Prices by Market Cap
 */
function buildRankingList() {
  const $rankingList = $("#rankingList");

  $.getJSON(TODAY_RANKING_ENPOINT, function (response) {
    const rankingList = response.data.cryptoCurrencyList;
    $.each(rankingList, function (index, crypto) {
      const listItem = `<li class="collection-item avatar"><img class="coin-logo circle" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png" loading="lazy" decoding="async" fetchpriority="low" alt=""><span class="title">${crypto.name}</span></li>`;
      $rankingList.append(listItem);
    });
  });
}

$(document).ready(function () {
  $(".tabs").tabs();

  const startDate = new Date("June 05, 2020");
  buildHistoricalList(startDate);
  buildRankingList();
});
