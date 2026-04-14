---
title: "The Diversity of Asian and Pacific Islander Experiences"
description: "Digging beneath aggregate Census data to understand how Asian, Native Hawaiian, and Pacific Islander experiences vary across heritages and geographies in the Puget Sound region, and how data analysts should approach small sample sizes in equity research."
pubDate: 2022-05-11
---

*Originally published on [Sound Data Stories](https://psrc.github.io/2022/Asian-Pacific-Islander), PSRC's data blog, May 2022.*

---

The Puget Sound Region has about 600,000 people who identify as Asian Alone and more than 35,000 people who identify as Native Hawaiian and Pacific Islander Alone. Asian, Native Hawaiian, and Pacific Islander groups represent a wide variety of [many different heritages](https://www.psrc.org/whats-happening/blog/region-has-diverse-asian-and-pacific-islander-heritage) in the region.

For Asian American and Pacific Islander Heritage Month this year, we wanted to dive deeper, to learn more about how Asian and Pacific Islander experiences vary across different groups based on their heritage and where they live in our region. This analysis results from a top agency priority of [advancing racial equity](https://www.psrc.org/equity).

Aggregate Census data can tell one story about people's experiences, but [underneath that lies a wide variety of individual experiences](https://www.urban.org/urban-wire/combining-racial-groups-data-analysis-can-mask-important-differences-communities). Broad data about race and ethnicity can at times hide how differently people really experience the world.

While writing this post, I learned that [Native Hawaiian and Pacific Islander people](https://www.seattletimes.com/seattle-news/why-its-time-to-retire-the-term-asian-pacific-islander/) experience significantly more disadvantages than some Asian groups. For future analyses, I plan to keep the two groupings separate based on our findings.

## How do worker earnings compare across groups?

Asian workers as an overall group have one of the highest median personal earnings at \$53,000 annually. On the other hand, Native Hawaiian and Other Pacific Islander alone workers have some of the lowest median earnings at \$32,000.

Median earnings vary widely across detailed groups:

| Group | Median annual earnings |
|---|---|
| Asian Indian | \$97,000+ |
| (Regional median) | ~\$53,000 (Asian overall) |
| Burmese | <\$30,000 |
| Nepalese | <\$30,000 |
| Fijian | <\$30,000 |
| Marshallese | <\$30,000 |
| Hmong | <\$30,000 |
| Native Hawaiian & Pacific Islander | \$32,000 |

*(Source: ACS PUMS, workers working more than 10 hours per week)*

## Education levels vary widely

Asian Alone people as a broad group have some of the highest education levels in the region by race, with **56% of adults over 25 having obtained a bachelor's degree**. Only **11% of Native Hawaiian and Pacific Islander adults** over 25 had obtained a bachelor's degree.

Education also varies sharply by geography: **over 60% of Asian Alone adults in King County** have a bachelor's degree, compared to **30% of Asian Alone adults in Pierce County**.

Native Hawaiian and Pacific Islander adults have low levels of education throughout the region, around 10% of adults have a bachelor's degree or higher, consistently across counties.

*(Source: ACS Table C15002D: Educational Attainment by Race, 2015-2019)*

## Intersecting diverse heritage and geography

Different groups of Asian people have settled in different parts of the region, and those groups experience different levels of earnings and education. As a result of where different groups have settled, in some places Asian people experience high levels of education and income, while in other places Asian people experience low levels.

The top Asian groups in King County are Chinese, Taiwanese, and Asian Indian, the groups with the highest incomes. Some of the groups with the lowest earnings have large populations in Pierce County, which is why median income is lower there.

***When planning for racial equity, we must consider the diversity of where people live and where they come from, and look beneath the surface of regional medians and averages. On the data side, we grapple with low sample sizes and often fear reporting.***

## Using statistical evidence to explain experiences of smaller populations

**How do we report data on important groups when the sample sizes are small?**

As data analysts, we can choose not to report racial equity data at all, for fear of making a statistical error. But if we only report data for large groups of people, we lose the important experiences of the few.

In this analysis, I chose to push the data to a reasonable limit. I still wanted to use statistical evidence, not statistical significance, to make choices, but allow flexibility so that I could build some level of understanding.

On the working earnings charts, I reported the margins of error to show that there is clearly a wide gap in working earnings across groups. Unfortunately, even with an educated audience, error bars often do not communicate this variation well. By reporting the results, I'm accepting that the statistical results can possibly be misinterpreted as stronger than they are, because I think it is more important to highlight the disparity than to ensure results are correctly interpreted by all audiences.

For the map of Bachelor's degree shares, my top priority was to learn where some disadvantaged groups settled in the region. The tricky thing is there are so many different groups of people and small sample sizes. My compromise was to map the group with the highest population size by tract, and only if that population exceeds 200 people.

**What should we do long term?**

- Continue to push for larger sample sizes for diverse groups, which can mean orders of magnitude larger budget requirements.
- Supplement statistical data with individual-level experience data to highlight the variation within groups.

I enjoyed [this article about overcoming the small-n problem](https://www.umass.edu/employmentequity/overcoming-small-n-problem) and recommend it if you'd like to learn more.

*Technical note: For these analyses, we used an R package PSRC data staff built called [psrccensus](https://psrc.github.io/psrccensus/) that makes it easy to pull ACS, PUMS, and Census data for our region.*
