# Thermodynamik

Die chemische Thermodynamik beschreibt die quantitativen Beziehungen zwischen Wärme und anderen Energieformen. Sie geht von wenigen, aus den Hauptsätzen der Thermodynamik abgeleiteten, Axiomen aus.

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

<Formulae> p_{ges} = \sum p_i </Formulae>

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

Die Schmelzenthalpie beim Übergang von fest zu flüssig funktioniert ähnlich, allerdings korrelliert sie nicht mit dem Schmelpunkt.

#### Phasendiagramm

Ein Phasendiagramm zeigt an, in welche Phase ein Stoff bei gegebenem Druck und Temperatur vorliegt. Bei anomalen Stoffen wie Wasser hat die Schmelzpunktskurve (Grenze zw. fest u. flüssig) eine negative Steigung, da der Druck mit steigender Temperatur abnimmt. Ein Übertreten der Dampdruckkurve des Feststoffs, also direkt von fest zu gasförmig, nennt man Sublimation bzw. Resublimation (gasförmig → fest). Oberhalb des kritischen Punktes gibt es keinen Unterschied zwischen Flüssigkeit und Feststoff. Im Tripelpunkt kann ein stoff in allen drei Aggregatzuständen vorliegen.

<figure>
    <a title="de:Benutzer:JoWi, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Phasendiagramme.svg"><img width="256" alt="Phasendiagramme" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Phasendiagramme.svg/256px-Phasendiagramme.svg.png"></a>
    <figcaption>Phasendiagramme von normalen und anomalen Stoffen</figcaption>
</figure>

#### Dampfdruck von Lösungen

Nach dem Raoult Gesetz entspricht der Dampfdruck einer idealen Lösung, ähnlich dem Dalton-Gesetz, der Summe der Partialddampfdrücke der einzelnen Bestandteile.

<Formulae> p_{ges} = \sum p_i </Formulae>

Wobei die Partialdrücke nach dem Stoffmengenanteil an der Lösung gewichtet werden.

<figure>
    <Formulae> p_i = p_{0i} * x_i </Formulae>
    <figcaption>p<sub>0i</sub> ist der Dampfdruck des reinen Stoffes.</figcaption>
</figure>

Wie bei den Gasen und Flüssigkeiten weiche auch reale Lösungen von dieser Idealvorstellung ab, weil die Teilchen interagieren. Ein Azeotrop ist eine Lösung, deren Zusammensetzung sich nicht durch Destillation ändert. Solche Mischungen können deshalb nicht durch Destillation getrennt werden. Ein Beispiel ist 96%iger Ethanol.

##### Ebullioskopie und Kryoskopie

Unflüchtige gelöste Stoffe erhöhen den Siedepunkt einer Lösung und erniedrigen ihren Schmelzpunkt, sodass die flüssige Phase in beide Richtungen ausgeweitet wird. Da die Änderung von Art und Menge des gelösten Stoffes abhängt, kann durch Messung der Schmelz-/Siedetemperatur die Konzentration des Stoffes bestimmt werden.

<figure>
    <table>
        <tbody>
            <tr>
                <td>
                    <figure>
                        <Formulae> x = \frac {\Delta T_S} {E_S} </Formulae>
                        <figcaption>Ebullioskopie</figcaption>
                    </figure>
                </td>
                <td>
                    <figure>
                        <Formulae> x = \frac {\Delta T_G} {E_G} </Formulae>
                        <figcaption>Kryoskopie</figcaption>
                    </figure>
                </td>
            </tr>
        </tbody>
    </table>
    <figcaption>E<sub>S</sub> und E<sub>G</sub> sind die molare Siede- bzw. Gefrierpunktsänderung</figcaption>
</figure>

### Osmose

Wenn zwei Lösungen unterschiedlicher Konzentration durch eine semipermeable Membran getrennt sind, durch die nur das Lösungsmittel durchtreten kann, dann wirkt ein osmotischer Druck von der Lösung geringerer Konzentration zur höheren. Dadurch fließt das Lösungsmittel in diese Richtung und sorgt so für einen Höhenunterschied, bis der osmotische Druck gleich der Differenz des hydrostatischen Drucks ist.

<figure>
    <a title="Welf Alfred Kreiner (WA Reiner at de.wikipedia), Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Osmose_Mix.svg"><img width="256" alt="Osmose Mix" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Osmose_Mix.svg/256px-Osmose_Mix.svg.png"></a>
    <Formulae> \Pi * V = n * R * T </Formulae>
    <Formulae> \Pi = \frac {n} {V} * R * T </Formulae>
    <Formulae> \Pi = c * R * T </Formulae>
    <figcaption>osmotischer Druck</figcaption>
</figure>

## Feststoffe

Feststoffe können als amorphe oder kristalline Körper vorliegen. Amorphe Feststoffe verfestigen zu schnell, um eine kristalline Struktur auszubilden und haben keinen exakten Schmelzpunkt. Kristalline Feststoffe können ionisch (Salze, elektrostatische Kräfte), molekular (Moleküle, Van-der-Waals-Kräfte), kovalent (nur eine Atomsorte, alle Atome durch kovalente Bindungen zusammengehalten) oder metallisch sein.

Das Kristallgitter gibt die räumliche Struktur des Kristalls an. Der Stoff kann dabei aufeine Elementarzelle reduziert werden, die sich immer wiederholt. Diese Zelle kann durch drei Kantenlängen und die Winkel zwischen ihnen beschrieben werden.

<figure>
    <a title="Ichwarsnur, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Metrik_Elementarzellen.png"><img width="512" alt="Metrik Elementarzellen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Metrik_Elementarzellen.png/512px-Metrik_Elementarzellen.png"></a>
    <figcaption>die 7 grundlegenden Kristallsysteme</figcaption>
</figure>

## Thermodynamische Systeme

Man unterscheidet zwischen drei Arten von Systemen:

* Abgeschlossene (isolierte) Systeme geben nach außen weder Energie noch Stoffe ab, und nehmen auch keine auf.
* Geschlossene Systeme sind stofflich getrennt, können aber Energie (z.B. Wärme) mit ihrer Umgebung austauschen.
* Offene Systeme tauschen sowohl Energie als auch Stoffe mit ihrer Umgebung aus.

Thermodynamische Zustandsgrößen sind der Druck p, die Temperatur T, die Stoffmenge n, die Dichte $\rho$, die innere Energie U, die Enthalpie H und die Entropie S. Die Prozessgrößen sind mechanische (W) bzw. thermische (Q) Arbeit.

### Hauptsätze der Thermodynamik

#### 0. Hauptsatz

Der nullte Hauptsatz besagt, dass zwei System A und B, die zu einem dritten System C im (thermodynamischen) Gleichgewicht stehen auch zueinander im Gleichgewicht sind.

<figure>
    <a title="Johannes Schneider, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Nullter_Hauptsatz_der_Thermodynamik.svg"><img width="512" alt="Nullter Hauptsatz der Thermodynamik" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Nullter_Hauptsatz_der_Thermodynamik.svg/512px-Nullter_Hauptsatz_der_Thermodynamik.svg.png"></a>
    <figcaption>Veranschaulichung des nullten Hauptsatzes</figcaption>
</figure>

#### 1. Hauptsatz

Der erste Hauptsatz ist der Energieerhaltungssatz. In einem abgeschlossenen System ist die Summe aller Energien konstant und gleich der inneren Energie. Eine Änderung der inneren Energie kann nur durch Zu- oder Abführen von Wärme oder mechanischer Arbeit geschehen.

<Formulae> \Delta U = \Delta Q + \Delta W </Formulae>

Wenn $\Delta$U positiv ist, wird dem System netto Energie zugeführt. In einem isolierten System ist $\Delta$U zu jedem Zeitpunkt gleich 0. Die Enthalpie eines Systems hängt neben der inneren Energie von Druck und Volumen ab.

<Formulae> H = U + p * V </Formulae>
<Formulae> \Delta H = \Delta U + \Delta p * V + p * \Delta V </Formulae>

In chemischen Experimenten kann ein Überdruck meist entweichen, wodurch p annähernd konstant und $\Delta$p gleich 0 ist. Deshalb kann man die Formel der Enthalpieänderung für diesen Fall vereinfachen.

<Formulae> \Delta H = \Delta U + p * \Delta V </Formulae>

Wenn $\Delta$H negativ ist, ist eine chemische Reaktion exotherm, gibt also Wärme nach außen ab. Ansonsten spricht man von endothermen Reaktionen.

Für eine Abfolge von Zustandsänderungen gilt der Hesssche Wärmesatz:

<Formulae> \Delta H_{ges} = \sum \Delta H_i </Formulae>

Die genauen Vorgänge sind daher für die Zustandsgrößen nicht von Belang, nur deren Summe.

#### 2. Hauptsatz

In einem abgeschlossenen System nimmt die Entropie (~Unordnung) konstant zu. Wärme kann daher nicht vollständig in mechanische Arbeit umgewandelt werden.

<Formulae> \Delta S = \frac {\Delta Q} {T} </Formulae>

Am absoluten Nullpunkt (0K) herrscht mit S = 0 die höchste Ordnung. Dieser Zustand lässt sich nicht durch eine endliche Anzahl an Schritten erreichen.

### Gibbs-Helmholtz-Gleichung

Die Gibbssche freie Enthalpie führt Enhalpie und Entropie in einer Größe zusammen. Mit ihr kann man sagen, ob eine chemische Reaktion exergon (freiwillig) oder endergon (unfreiwillig) ablaufen kann. Auch wenn eine Reaktion thermodynamisch freiwillig ist, kann sie kinetisch gehemmt sein, indem eine Aktivierungsenergie notwendig ist.

<figure>
    <Formulae> \Delta G = \Delta H - T * \Delta S </Formulae>
    <figcaption>Je höher die Temperatur, bei der eine Reaktion abläuft, desto eher wird die freie Enthalpie auch bei niedriger Entropiezunahme größer als die Enthalpiezunahme sein, und damit die Reaktion exergon. Wenn dagegen die Entropieänderung negativ ist, dann muss entsprechend die Enthalpie abnehmen.</figcaption>
</figure>

Die freie Standardbildungsenthalpie ist die Änderung der freien Enthalpie bei der Bildung eines Stoffes aus den Elementen. Sie ist eine stoffspezifische Eigenschaft.

<figure>
    <Formulae> \Delta G° = \Delta G°_{Produkte} - \Delta G°_{Edukte} </Formulae>
    <figcaption>Berechnung der freien Standardbildungsenthalpie für Reaktionen, deren Edukte bereits Verbindungen sind</figcaption>
</figure>