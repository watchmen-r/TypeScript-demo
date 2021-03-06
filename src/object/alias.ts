export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  };
  console.log('Object alias sample 1', japan);

  const america: Country = {
    capital: 'washington, D.C.',
    language: 'English',
    name: 'America',
  };
  console.log('Object alias sample 2', america);

  // 合併型(Union)と交差型(intersection)
  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };
  // 合併型 KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard;

  // 交差型 KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard;

  // Knight よりの冒険者
  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木',
    swordSkill: 'aaa',
  };

  // Wizardよりの冒険者
  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木',
    magicSkill: 'bbb',
  };

  console.log('Object alias sample 3', adventurer1);
  console.log('Object alias sample 4', adventurer2);

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: 'bbb',
    swordSkill: 'sword',
    magicSkill: 'magic',
  };
  console.log('Object alias sample 4', paladin);
}
