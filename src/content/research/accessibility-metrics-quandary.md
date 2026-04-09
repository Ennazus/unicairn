---
title: "The Quandary of Accessibility Metrics"
description: "We care a lot about accessibility in transportation planning — but measuring it in a way that is both easy to understand and statistically rigorous has proven surprisingly difficult. A look at three approaches and their tradeoffs."
pubDate: 2015-09-11
---

*Originally published on [Sound Data Stories](https://psrc.github.io/2015/accessibility), PSRC's data blog, September 2015.*

---

We measure many things when evaluating projects, but one impact we care a lot about is **accessibility** — or the amount of economic, social, or other opportunities available to people through travel. In our [benefit-cost tool](http://www.psrc.org/data/models/benefit-cost-analysis/), we must turn accessibility into a dollar value, but this is a challenge: accessibility is quite hard to quantify in a way that is both a) easy-to-understand and b) statistically comprehensive and based on human behavior.

I haven't found a measure yet that satisfies both criteria. Here are three metrics we've used in our work, along with their benefits and shortcomings.

## Metric 1: Number of jobs reachable within 30 minutes

One way to quantify accessibility is to show the number of jobs that can be reached within 30 minutes from a given location by a specific travel mode. This measure is somewhat intuitive to planners, which makes it strong on the understandability dimension — but it suffers from several problems:

- I can't think of how to turn "number of jobs available in a certain amount of time" into a dollar amount. Can you?
- This measure suffers from **threshold effects** — why thirty minutes? Why not thirty-five or fifteen?
- It would vary strongly by mode, making comparison across modes difficult.

Although accessibility to jobs has issues as a rigorous metric, it sure does make a pretty map. The [University of Minnesota Accessibility Observatory](http://access.umn.edu/research/america/transit/2014/maps/) has produced beautiful maps showing the number of jobs available from any given location by walking and transit in Seattle.

## Metric 2: Travel times converted to cost using value of time

Another way to measure accessibility is by measuring **travel times** and applying a [value of time](https://en.wikipedia.org/wiki/Value_of_time) to convert total time into a dollar amount, which can then be compared against other costs like collisions and air pollution.

Several problems arise from this approach:

**Sometimes people actually enjoy traveling,** so it shouldn't necessarily be a cost. [People are actually happiest when they commute by walking](http://www.citylab.com/commute/2014/08/which-mode-of-travel-provides-the-happiest-commute/378673/), even though it is the slowest mode. Also, [the ideal commute time is not zero](http://link.springer.com/article/10.1023/A:1010366321778) — workers reason that an ideal commute provides mental transition time between home and work. Travel time is not always a dis-benefit, though we often assume it to be out of convenience.

**People's value of time depends heavily on context**: trying to make a doctor's appointment in congested traffic (high value) versus walking to a park on a pretty street (low value).

The discrepancy has real implications. Suppose a new light rail line to Bellevue attracts thousands of new riders. Transit travel time is generally **longer** than driving because it includes extra walking and waiting time. If you assumed people only cared about time, and converted that time to cost, you'd conclude that total travel cost *increased* even as thousands of people chose the new light rail system. This doesn't make sense: people chose it, which means they are getting some benefit not captured by this metric.

## Metric 3: Aggregate mode-destination logsums

A statistically strong measure of accessibility is an [aggregate logsum](http://www.jbowman.net/refereed/2006.Dong_et_al.Moving_to_AB_measures_of_acccessability.pdf), developed by several top travel modeling minds. An aggregate logsum is an accessibility measure that accounts for all places you can go, by all modes. They are estimated from observed behaviors of destination and mode choices and can be easily converted to a monetary scale.

![Aggregate Logsums in the PSRC region](https://psrc.github.io/images/2015/accessibility-base-av-banner.jpg)

The problem with aggregate logsums is that they are hard to explain to the mathematically disinclined.

![Example calculation of an aggregate logsum](https://psrc.github.io/images/2015/aggregate-logsums.png)

The general public will not abide sigmas in the wild, and they likely revolt upon encountering a natural logarithm. If people can't intuitively understand a measure, it probably won't work for decision-making.

---

This is a problem I've continued to think about. My [Towards Human-Scale Transport Metrics](/work/human-scale-metrics) presentation at TRB in 2020 was a later attempt to address it — starting from the question of what people are actually trying to do when they travel, rather than from the system-level proxies we've built up around it. Comments on solving the accessibility metric quandary are still very welcome.
