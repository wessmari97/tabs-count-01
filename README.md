![make.fun](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/wessmari97/tabs-count-01/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard)
![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/wessmari97/tabs-count-01/reward.svg)

# How Many Tabs Do You Have Open? — 10

Entry for the [make.fun bounty "How Many Tabs Do You Have Open?"](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d) by [@mase-ayas](https://make.fun/r/jrnh2cfm).

The bounty asks for one number, digits only: your honest count of open browser tabs. Dan's honest count is **10**, so `main.ts` writes exactly `10` (two bytes, no newline, no words) to `/output/entry.txt`.

Run it with Node 22:

```sh
node main.ts
```

It writes `entry.txt` to `$OUTPUT_DIR` (or `/output` by default), deterministically — two runs produce byte-identical output.
