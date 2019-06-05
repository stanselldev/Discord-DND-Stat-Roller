function helpCommand(args, msg) {
    msg.author.send(`...\n
***GETTING STARTED***
\`\`\`
1. Create an account.

- Command: !account create

2. Create a character.

- Command: !character create [URL]

- The url should be from your character sheet on DnD Beyond. You can have as many characters as you want. Just be sure to load them before calling any checks as they only pull from the currently loaded character.

3. Load your character to use for Checks. Call this if you did not respond [y] when prompted to do so after creating a character.

- Command: !character load [name]

- Name is the name of your character from your character sheet.

4. Roll a check.

- Command: !check [check]

- See below for a list of Checks you can call. Your currnetly loaded characters stats will automatically be applied to the roll result.
\`\`\`
***!roll/r***
\`\`\`
Format : !r [sides] [rolls] [mod]
Example: !r 20 2 5
Result : Roll a [D20] [twice] and add [5] to each roll
\`\`\`
***!check/c***
\`\`\`
Format: !check [check]
Checks:
  acrobatics/acr
  animalhandling/ani/ah
  arcana/arc
  athletics/ath
  deception/dec
  history/his
  insight/ins
  intimidation/int
  investigation/inv
  medicine/med
  nature/nat
  perception/perc
  performance/perf
  persuasion/pers
  religion/rel
  sleightofhand/sle/soh
  stealth/ste
  survival/sur
\`\`\`
***!account/acc***
\`\`\`
Format : !acc [action]
Actions:
  create/c
  delete/d
\`\`\`
***!character/char***
\`\`\`
Format : !char [action]
Actions:
  create/c [url]
  delete/d [name]
  refresh/r [name]
  load/l [name]
  view/v [name]
    name is optional for view
\`\`\`
    `)
}

module.exports = {
    helpCommand
}
