# Thermodynamik

## Gas

Für grundlegende thermodynamische Berechnungen an Gasen und Flüssigkeiten werden idealisierte Annahmen getroffen, die den realen Zustand unter normalen Bedingungen ausreichend genau beschreiben. Für ein ideales Gas wird angenommen, dass die Teilchengröße verschwindend klein ist im Vergleich mit dem Abstand der einzelnen Teilchen. Weiters interagieren die Teilchen eines idealen Gases nur über elastische Stöße, es wird also keinerlei kinetische Energie in andere Formen umgewandelt, und befinden sich in konstanter, zufälliger Bewegung. Dies wird durch die kinetische Gastheorie beschrieben.

<figure>
    <img src="./media/elastischer_stoß.png"/>
    <figcaption>elastischer Stoß</figcaption>
</figure>

Bei einem elastischen Stoß eines Teilchens der Masse m mit einer Wand wird der gesamte Bewegungsimpuls in (in diesem Fall) x-Richtung umgekehrt, was einer gesamten Impulsänderung des doppelten Impulses in x-Richtung entspricht.

<Formulae> \Delta p_x = -2 * p_x = -2 * m * v_x </Formulae>

Während dieses Vorgangs wirkt die Impulsänderung als Kraft auf die Wand des Behälters.

<Formulae> F = \frac {\Delta p_x} {t} = m * a </Formulae>

Durch die Summe aller Teilchen, die in einem bestimmten Zeitraum auf die gesamte Fläche der Wand treffen, ergibt sich der auf die Wand wirkende Druck. Dieser hängt von der mittleren Geschwindigkeit der Teilchen, ihrer Masse sowie den verfügbaren Freiheitsgraden ab.

<figure>
    <Formulae> E_{kin} = \frac { n M c^2 } { 3 } </Formulae>
    <figcaption>kinetische Energie eines Gases </br> c ist die mittlere Geschwindigkeit der Teilchen </br> Statt der Molmenge n und der molaren Masse M kann man auch die Teilchenzahl N und die Masse m einsetzen. </br> 3 ist die Zahl der Freiheitsgrade in einem dreidimensionalen Raum.</figcaption>
</figure>

Damit und mit der allgemeinen Zustandsgleichung idealer Gase (siehe unten) ist die mittlere Geschwindigkeit der Teilchen eines _bestimmten_ Gases:

<Formulae> c = \sqrt {\frac {3 R T} {M}} </Formulae>

#### Maxwell-Boltzmann-Geschwindigkeitsverteilung

Die obige Formel gibt nur die mittlere Geschwindigkeit aller Teilchen an. Real sind die Geschwindigkeiten aber über einen großen Bereich verteilt. Es existieren also zu jedem Zeitpunkt Teilchen, die sich wesentlich schneller bewegen, als die anderen, wie auch solche, die fast stillstehen. Diese Geschwindigkeitsverteilung kann mit der Formel

<Formulae> f(c) = 4p * \sqrt [\frac {3} {2}] {\frac {M} {2 p R T}} * c^2 * e ^ {\frac {-M c^2} {2 R T}} </Formulae>

graphisch dargestellt werden.

<figure>
    <a title="TDF, CC0, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Mb_N2.png"><img width="512" alt="Mb N2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Mb_N2.png/512px-Mb_N2.png"></a>
    <figcaption>Geschwindigkeitsverteilung von Stickstoff bei verschiedenen Temperaturen</figcaption>
</figure>

#### Grahamsches Effusionsgesetz

Wenn sich gleiche Mengen zweier verschiedener Gase gleicher Temperatur in Behältern gleichen Volumens befinden, dann haben sie auch die gleiche kinetische Energie, da diese direkt mit der Temperatur zusammenhängt. Da ihre Teilchen aber verschiedene Massen haben, müssen sie sich auch unterschiedlich schnell bewegen, damit gilt

<Formulae> E_{kin} = \frac {M_1 * v_1^2} {2} =  \frac {M_2 * v_2^2} {2} </Formulae>

Dadurch kann das Verhältnis der mittleren Teilchengeschwindigkeiten so ausgedrückt werden:

<Formulae> \frac {v_1} {v_2} = \sqrt {\frac {M_2} {M_1}} </Formulae>

Der Zustand eines Gases wird bestimmt durch sein Volumen V, den herrschenden Druck p, die Zahl der Teilchen N sowie die Temperatur T.

<figure>
    <Formulae>p * V = N * k_B * T</Formulae>
    <figcaption>Zustandsgleichung eines idealen Gases</figcaption>
</figure>

<figure>
    <Formulae>k_B = 1,38 * 10^-23 \; J/K</Formulae>
    <figcaption>Boltzmannkonstante</figcaption>
</figure>

k<sub>B</sub> kann mit der Avogadro-Zahl N<sub>A</sub> zur universellen Gaskonstante kombiniert werden.

<Formulae> R = k_B * N_A = 8,314 \; J/(K*mol) </Formulae>

Damit kann die Zustandsgleichung in anderer Form, mit n als der Anzahl der Mole an Gas angegeben werden.

<Formulae> p * V = n * R * T </Formulae>

In realen Gasen kommt es zu Wechselwirkungen zwischen den einzelnen Gasteilchen und dadurch zu Abweichungen vom idealen Gas. Deshalb kommt hier ein Kompressionsfaktor z zum Tragen.

<Formulae> p * V = z * n * R * T </Formulae>

### Gasgesetze

Die Gasgesetze wurden mit der Zeit von verschiedenen Wissenschaftlern aufgestellt und führten zur oben beschriebenen Zustandsgleichung.

#### Gesetz von Gay-Lussac:

Das Volumen eines Gases ist, bei konstanter Stoffmenge und konstantem Druck, direkt proportional zur Temperatur.

<Formulae> V \sim T </Formulae>

#### Gesetz von Avogadro:

Zwei gleich große Gasvolumina unter gleichem Druck und gleicher Temperatur haben immer auch die gleiche Teilchenzahl.

<Formulae> V \sim N </Formulae>

#### Gesetz von Boyle-Mariotte:

Der Druck eines idealen Gases ist bei konstanter Temperatur und konstanter Teilchenanzahl indirekt proportional zum Volumen.

<Formulae> p \sim \frac {1} {V} </Formulae>

### Partialdruck

Das Gesetz von Dalton besagt, dass der Druck eines Gasgemisches gleich der Summe der Einzeldrücke seiner Bestandteile ist.

<Formulae> p_{ges} = \sum_{i=0}^n p_i </Formulae>

## Flüssigkeit

Flüssigkeiten nehmen ein bestimmtes Volumen, aber keine feste Form ein. Eine ideale Flüssigkeit ist unter Druckschwankungen inkompressibel. Flüssigkeitsteilchen sind erheblich langsamer als die eines Gases. In realen Flüssigkeiten ist zudem durch die gegenseitigen Anziehungen, die zu Energieverlusten in Form von Wärme eine gewisse Viskosität vorhanden. Diese erhöht sich mit dem Druck und sinkt mit zunehmender Temperatur. Gleiches gilt für die Oberflächenspannung, die dadurch zustandekommt, dass Teilchen an der Oberfläche nur von einer Seite Anziehung ihrer Nachbarn erfahren.

<figure>
    <a title="Galaktico, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Fest_fluessig_grenze.png"><img width="512" alt="Fest fluessig grenze" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fest_fluessig_grenze.png/512px-Fest_fluessig_grenze.png"></a>
    <figcaption>Oberflächenspannung einer Flüssigkeit</figcaption>
</figure>

### Dampfdruck

Wie in Gasen gibt es auch in Flüssigkeiten stets Teilchen, die schneller sind, als der Rest. Wenn diese schnell genug sind, um die Anziehung der anderen Teilchen zu überwinden, können sie aus der flüssigen in die gasförmige Phase übergehen. Umgekehrt können auch Gasteilchen so langsam sein, dass sie wieder zur Flüssigkeit werden. Beim Dampfdruck P liegt ein Equilibrium vor, es gehen so viele Teilchen von der Flüssigkeit ins Gas über, wie umgekehrt. Der Siedepunkt ist die Temperatur, bei der der Dampfdruck dem Umgebungsdruck entspricht, ist also auch von diesem abhängig. Wenn eine Flüssigkeit den Siedepunkt erreicht, erhöht sich die Temperatur durch weitere Wärmezufuhr nicht weiter. Stattdessen wird diese Energie als Verdampfungsenthalpie aufgewendet, um Flüssigkeitsteilchen von der flüssigen in die gasförmige Phase übertreten zu lassen. Diese Energie wird beim Kondensieren wieder frei und ist umso größer, je höher der Siedepunkt liegt.

<Formulae> [H_\nu] = 1 \; kJ/mol </Formulae>

<figure>
    <table>
        <thead>
            <tr>
                <th>Stoff</th>
                <th>Siedepunkt bei 1,013bar</th>
                <th>H<sub>ν</sub></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Wasser</th>
                <th>100°C</th>
                <th>40,7kJ/mol</th>
            </tr>
            <tr>
                <th>Ethanol</th>
                <th>78,3°C</th>
                <th>38,6kJ/mol</th>
            </tr>
            <tr>
                <th>Chloroform</th>
                <th>61,3°C</th>
                <th>29,4kJ/mol</th>
            </tr>
            <tr>
                <th>Diethylether</th>
                <th>34,6°C</th>
                <th>26kJ/mol</th>
            </tr>
        </tbody>
    </table>
    <figcaption>Siedepunkte und Verdampfungsenthalpien verschiedener Stoffe</figcaption>
</figure>

## Osmose

## Feststoffe

## Thermodynamische Systeme

### Hauptsätze der Thermodynamik
