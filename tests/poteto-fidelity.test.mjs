// This fork keeps upstream pstack's wording where the michael-denyer port
// reversed one of poteto's stated positions. Each phrase below is poteto's own
// sentence. A failure after merging the port means its rewrite came back:
// restore the upstream text. A failure after an upstream sync means poteto
// changed the sentence himself: take his new wording and update the pin.
import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const skillsDir = fileURLToPath(new URL("../plugins/pstack/skills", import.meta.url));

const positions = [
  {
    position: "a test must fail when every import returns undefined",
    file: "principle-test-behavior-not-implementation/SKILL.md",
    phrase: "ask whether it would still pass if every function it imports returned `undefined`",
  },
  {
    position: "an absence assertion pairs with a presence assertion",
    file: "principle-test-behavior-not-implementation/SKILL.md",
    phrase: "For an absence, assert the presence on the other input in the same test.",
  },
  {
    position: "the census comes before the next fix",
    file: "principle-attack-the-premise/SKILL.md",
    phrase: "Do not start the next fix before the premise is written down and the census exists.",
  },
  {
    position: "remove the asymmetry instead of compensating for it",
    file: "principle-attack-the-premise/SKILL.md",
    phrase: "Remove the asymmetry instead of compensating for it",
  },
  {
    position: "the prior trail is authoritative",
    file: "poteto-mode/playbooks/session-pickup.md",
    phrase: "The prior trail is authoritative input. Resist the bias to re-derive it.",
  },
  {
    position: "re-verifying from scratch distrusts an authoritative trail",
    file: "poteto-mode/playbooks/session-pickup.md",
    phrase: "A \"let me verify from scratch\" pass means you're treating the trail as untrustworthy when it's authoritative.",
  },
  {
    position: "the autopilot-full owner merges on a clean verdict",
    file: "poteto-mode/playbooks/autopilot-full.md",
    phrase: "On a clean verdict the owner merges, and a fresh owner takes the next item.",
  },
  {
    position: "the autopilot-full owner squash-merges its own PR",
    file: "poteto-mode/playbooks/autopilot-full.md",
    phrase: "The owner squash-merges its own PR through the resolved forge and returns.",
  },
  {
    position: "the index carries the undefined check",
    file: "poteto-mode/SKILL.md",
    phrase: "If the test would still pass when every imported function returns `undefined`",
  },
  {
    position: "the index carries the census",
    file: "poteto-mode/SKILL.md",
    phrase: "Take a census of which actors hold the imbalance before the next fix",
  },
  {
    position: "the index says autopilot-full runs to merged",
    file: "poteto-mode/SKILL.md",
    phrase: "A queue of independent PRs run to merged with full autonomy.",
  },
];

describe("poteto's positions this fork keeps", () => {
  for (const { position, file, phrase } of positions) {
    test(`${file} keeps "${position}"`, () => {
      expect(readFileSync(join(skillsDir, file), "utf8")).toContain(phrase);
    });
  }
});
