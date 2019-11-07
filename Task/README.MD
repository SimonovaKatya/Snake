# Frontend, часть вторая. 
## Задача
В данной задаче вам необходимо реализовать: 
1. Управление Эшем (см демо) с помощью кнопок со стрелками. 
2. Управление Эшем с помощью клавиш со стрелками на клавиатуре. 
3. Случайную генерацию покемонов на игровом поле. 
4. Возможность сбора покемонов. 
4. Увеличение очков при сборе покемона. 
5. Невозможность уйти за пределы игрового поля.   
7. Возможность управления FPS (частотой обновления поля), используя предоставленное поле. 
9. Столкновение со стеной - проигрыш. 


Задание с повышенной сложностью: 
1. При сборе покемонов они должны выстраиваться "хвостом" по принципу "змейки". 
2. С помощью setTimeout / setInterval реализовать автоматическое перемещение Эша по следующему принципу: Эш всегда движется по направлению последнего заданного движения.
3. Столкновение с хвостом - проигрыш. 
4. Анимация перемещения по полю. 
5. Поворот Эша и покемонов в сторону движения

![Demo with manual control](Demo_manual.gif)
*Демонстрация ручного управления*

![Demo with animation](Demo_auto.gif)
*Демонстрация автоматического управления*

## Оценивание

| Total                | Ash moves                       | Keyboard control                                       | Input usage                                                                            | Pokemon Pick                                                 | Pokemon Generate                                    | Borders control                                       | Rotation                                   | Interval (FPS)                          | Snake game                         | Animation                  | Architecture bonus                                              |
|----------------------|---------------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------|--------------------------------------------|-----------------------------------------|------------------------------------|----------------------------|-----------------------------------------------------------------|
| 10                   | 1.5                             | 0.5                                                    | 0.5                                                                                    | 0.75                                                         | 0.75                                                | 0.5                                                   | 0.5                                        | 0.75                                    | 1.5                                | 1                          | 1.75                                                            |
| Total possible score | Ability of Ash to properly move | Ability to control Ash using keyboard (WASD or arrows) | Reading and wrighting from/to inputs (not only RR but with all of the logic necessary) | Ability to make pokemon disapear right before you step on it | Depends on how good your pokemon generation code is | You cannot cross border and if you hit one game overs | Abitily to rotate Ash and pokemons in tail | Ability to change FPS using input filed | If you have done proper snake game | Quality of your animations | Quolity of your code if you have done significant part of tasks |

Каждый проверяемый аспект (критерий) после проверки получает значение от 0 до 100%. 


