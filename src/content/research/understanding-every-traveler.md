---
title: "Measuring Every Mode, Understanding Every Traveler"
description: "Passive data tells us what moved, when, and where. The questions it leaves unanswered — who, why, and whether the system is working — are becoming more urgent as the field pivots to equity, safety, and active transportation."
pubDate: 2026-04-13
tags: ["passive data", "household travel survey", "equity", "active transportation", "standardization"]
---

![My daughter on a transit bus, going to daycare](/images/brigid_bus.jpg)
*My daughter, on the bus to daycare. Passive data recorded one boarding at 8am on a transit segment. Here is what else was true.*

---

There is a moment happening right now in transportation data that feels genuinely new. The tools for measuring movement have gotten remarkably good. Passive data platforms can now tell you, with real precision, how many vehicle trips happened on a corridor, when bike activity peaks, where pedestrians concentrate on a Saturday morning. The "Measure Every Mode" ambition that was aspirational a decade ago is becoming operational. That is worth taking seriously.

Which is exactly why I keep coming back to the photograph above.

My daughter and I are on a transit bus. She is two years old, which means she is invisible to the data — she does not generate a boarding event. I am one boarding. The data records: one person-trip, transit mode, AM peak, urban segment. What it cannot record: that this is a care trip, not a commute. That the route only works because her daycare is within walking distance of the stop. That I will make a second trip to work after drop-off, adding a trip-chain complexity that passive data systematically underweights. That if the frequency on this route dropped to every 30 minutes, I would be driving. That I am one of millions of women whose travel patterns look nothing like the peak-period, single-destination commute that transportation systems were built to serve — and whose needs only become visible when you ask.

Passive data measures *what, when, and where* extraordinarily well. It does not measure *who* took that trip, *why* they took it, what alternatives they considered, or whether the system is actually working for them. That is not a critique. It is a structural property of passive data that no amount of machine learning can fully resolve. Location-based services and connected vehicle data capture revealed behavior — the trips that happen. They are nearly silent about the trips that don't happen, the people who aren't in the data, and the reasons behind the patterns they do detect.

As passive data gets more precise, the questions it leaves unanswered get more consequential — not less.

## The standardization problem hiding in plain sight

I spent several years building the infrastructure for PSRC's household travel survey program — four waves of data collection across 2017, 2019, 2021, and 2023, each designed to be comparable to the last. The hardest part of that work was not the technical pipeline. It was the judgment calls about what things mean when the world changes.

Take telework. In 2017, we asked whether someone worked from home. By 2023, that question had become almost comically inadequate. We needed to know: is your primary work location home, or do you have a fixed office you sometimes use? Do you telework some days and commute others, and if so, how many of each? Did you work from home during the travel day, and for how many hours? The instrument evolved across four waves as hybrid work emerged, and at each wave someone had to decide how to make 2023 answers interpretable alongside 2017 answers. That required building not just a new question but a crosswalk, a documented rationale, and a reusable framework so the next analyst who touched the data could understand what they were looking at.

This is what it takes to make behavioral data comparable over time. It is not glamorous. It is also irreplaceable. Without it, you cannot tell whether travel patterns actually changed — or whether your instrument changed and the patterns stayed roughly the same.

The COVID and telework findings we eventually produced were only credible because of that infrastructure. When we found that working from home correlated with fewer work trips but not more non-work trips — and that the hypothesized "rebound" of additional non-work travel largely didn't materialize, producing a net reduction in total trips — that finding held up because we could trace it across comparable waves. It was a layered result. Walking rates were higher among WFH workers. The rebound hypothesis that had circulated in the planning community turned out to be wrong. You could only see that clearly if you had data standardized carefully enough to be trusted.

## The "who" question is becoming urgent

The field is in the middle of a pivot toward active transportation, safe streets, equity. These are exactly the domains where the gap between "what moved" and "who moved and why" is most consequential.

A count of bike trips on a corridor tells a planner something real. It does not tell them whether those trips are concentrated among a narrow demographic — younger, male, cycling-confident — or whether women, older adults, and low-income riders are underrepresented and why. It does not tell them whether a safety intervention changed who was riding, not just how many. It does not tell them whether the corridor feels safe to ride with a child, or whether the people who would use it aren't using it because of something the count data has no way to see.

The [women's travel analysis I worked on at PSRC](https://psrc.github.io/travel-studies/2021/analysis/women_transportation_needs.html) illustrated this directly. Women take more trips, to more varied destinations, more often for someone else's benefit. They are more likely to be in car-free or car-light households. They take more trips with other people. Women of color use transit on nearly double the share of trips as white non-Hispanic women, and women bike at roughly a third the rate of men — regardless of race, ethnicity, or income. In 2019, men made 74,000 bike trips in the central Puget Sound region; women made 30,000. All of that is invisible in passive data. It only appears when you ask people directly — and build the survey instrument, the sampling design, and the longitudinal comparability to trust what they tell you.

There is also a harder version of this problem: the trips that don't happen at all. Equity dashboards that show demographic breakdowns of existing travelers are useful, but they miss suppressed demand entirely. Someone who doesn't bike because the network doesn't feel safe, or who doesn't ride transit because the frequency doesn't work with childcare pickup, or who chains three short trips that would collapse if one leg failed — none of that shows up in passive data. The honest version of equity measurement asks whether people could reach the activities that mattered to them. Ridership as an equity proxy measures system use, not whether needs are met.

## The opportunity in the gap

I am not arguing that passive data is insufficient. I am arguing the opposite: the precision of passive data has reached the point where the questions it cannot answer are the ones that matter most for the next generation of planning decisions. Equity commitments require understanding who is not served. Safe streets programs need to know whether interventions changed behavior for the people they were designed to help. Active transportation investments depend on understanding what holds people back, not just where the bikes are going.

The path forward is integration — not one data source replacing another, but passive data and behavioral data working together, each doing what it does well. Passive data provides scale, recency, and geographic coverage that no survey can match. Behavioral data provides the who, the why, and the counterfactual. Standardized over time, both become more powerful than either is alone.

The infrastructure that makes that possible — comparable survey instruments, documented crosswalks, reusable frameworks for handling instrument evolution — is the unsexy prerequisite for everything else. It is also the thing the field has consistently underinvested in, because it is hard to sell a crosswalk. The precision of the "what and where" data is now good enough that the cost of not building the "who and why" layer is becoming visible.

My daughter on that bus is not just a personal photograph. She is the trip the data doesn't see — the care obligation, the route dependency, the second leg, the household without a car, the person whose needs only become visible when you ask. As the field gets better at measuring every mode, the question I keep returning to is whether we are also getting better at understanding every traveler.

I think we can. But it will take the same kind of deliberate, unglamorous infrastructure work that made four waves of survey data comparable. It will take people who know what they are asking and why it matters. And it will take being honest about the difference between measuring movement and understanding people.
