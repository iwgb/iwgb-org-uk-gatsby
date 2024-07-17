export const HEADINGS_TAG_SLUG = 'special-headings';

const headings = {
  'the-evolution-of-our-union':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/Intro.jpg',
  'a-blueprint-for-justice':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/ABlueprintForJustice.jpg',
  'a-brief-history-of-the-iwgb-2012-2022':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/Intro.jpg',
  'the-rising-tide':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/TheRisingTide.jpg',
  'here-come-the-couriers':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/HereComeTheCouriers.jpeg',
  'precarious-workers-fight-back-':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/PrecariousWorkersFightBack.jpg',
  'strength-to-strength':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/StrengthToStrenght.jpg',
  'covid-19-key-workers-and-the-fight-for-our-frontline':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/COVID19.jpg',
  '10-years-and-counting':
    'https://cdn.iwgb.org.uk/bucket/Photos/HistoryImages/10YearsAndCounting.jpg',
};

const generateSubheroHeading = (
  id: string,
  title: string,
  url: string
): string => `
  <div id="${id}" class="my-4" style="background: url(${url}) center/cover">
    <div class="iwgb-red-fade-bg d-flex flex-column justify-content-between" style="min-height: 15rem">
      <div class="d-flex justify-content-end">
        <img aria-hidden="true" class="m-2" style="height: 1.5rem; width: auto" src="https://cdn.iwgb.org.uk/assets/wordmark-white.png">
      </div>
      <h2 class="m-2">
        <span class="bg-white font-weight-700 font-size-32">${title}</span>
      </h2>
    </div>
  </div>
`;

const applyHeadingsToHtml = (html: string): string =>
  html.replace(
    /<h2 id="(?<id>[\w-]+)">(?<title>[^<]+)<\/h2>/g,
    (_, id: string, title: string) => {
      if (Object.keys(headings).includes(id)) {
        return generateSubheroHeading(
          id,
          title,
          headings[id as keyof typeof headings]
        );
      }
      return `<h2 id="${id}">${title}</h2>`;
    }
  );

export default applyHeadingsToHtml;
