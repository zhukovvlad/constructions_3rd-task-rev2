/* eslint-disable */
export default function setUpAttacks(items) {
  const result = [];

  // TODO: ваш код

  for (let i = 0; i < items.length; i += 1) {
    result[i] = (x) => {
      //  вычисляем общее количество выживших
      let notNullHealth = items.filter((item) => item.health > 0).length;
      //  на всякий случай дабы избегать возможного деления на ноль
      if (notNullHealth === 0) {
        notNullHealth = 1;
      }
      for (const item in items) {
        /* делаем так, чтобы атака на мёртвого члена команды была неэффективной */
        if (i === item && items[item].health === 0) {
          x = 0;
        }
        /* проверяем, на кого направлена атака, и учитываем это при подсчёте урона */
        // eslint-disable-next-line eqeqeq
        if (i == item) {
          items[item].health = items[item].health - Math.floor(x / notNullHealth) - (x % notNullHealth);
        } else {
          items[item].health = items[item].health - Math.floor(x / notNullHealth);
        }

        /* здоровье может быть или положительным или нулевым */
        if (items[item].health <= 0) {
          items[item].health = 0;
        }
      }
    };
  }

  return result;
}
