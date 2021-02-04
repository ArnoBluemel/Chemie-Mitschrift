# Säuren und Basen

Die älteste Definition von Säuren und Basen geht auf Arrhenius zurück und beschreibt Säuren als Stoffe, die in wässriger Lösung in Protonen (H<sup>+</sup>) und Anionen dissoziieren, während Basen zu Hydroxidionen (OH<sup>-</sup>) und Kationen dissoziieren. Diese Definition beschreibt nur den Fall für Wasser als Lösungsmittel. Nach Brønsted und Lowry sind Säuren **Protonendonatoren** und Basen **Protonenakzeptoren**.

<figure>
    <Formulae>
        HA \; + \; B \; \rightarrow \; A^- \; + \; HB^+
    </Formulae>
    <figcaption>Protolyse </br> HA . . . Säure </br> B . . . Base</figcaption>
</figure>

HA und A<sup>-</sup> sind gemeinsam ein **konjugiertes Säure-Basen-Paar**. HA reagiert als Säure, A<sup>-</sup> als Base. Stoffe, die sowohl sauer als auch basisch reagieren können, nennt man **amphoter**.

<figure>
    <Formulae>
        H_3O^+ \; \leftarrow \; H_2O \; \rightarrow \; OH^- \\
        H_3PO_4 \; \leftarrow \; H_2PO_4^- \; \rightarrow \; HPO_4^2-
    </Formulae>
    <figcaption>amphotere Formen von Wasser und Dihydrogenphosphat</figcaption>
</figure>

Eine noch allgemeinere Definition stammt von Gilbert Newton Lewis, der Säure-Base-Reaktionen als Elektronenpaar-Übertragungen definiert. Die Protolyse ist dabei lediglich ein Spezialfall. Für die meisten einfachen Fälle reicht aber die Brønsted-Lowry-Definition.

## pH-Wert

Wasser durchläuft **Autoprotolyse**. Dabei zerfällt es in einer Gleichgewichtsreaktion zu Oxonium- (H<sub>3</sub>O<sup>+</sup>) und Hydroxid-Ionen (OH<sup>-</sup>).

<Formulae> 2 \: H_2O \; \rightleftharpoons \; H_3O^+ \; + \; OH^-</Formulae> 

Aus der Formel für die Gleichgewichtskonstante

<Formulae> K = \frac {c_{H_3O^+} * c_{OH^-}} { {c_{H_2O}} ^2} </Formulae>

lässt sich das temperaturabhängige Ionenprodukt des Wassers berechnen:

<Formulae> K_W = K * {c_{H_2O}} ^2 = c_{H_3O^+} * c_{OH^-} </Formulae>

Da das Wasser in gleichen Maßen in Oxonium- wie in Hydroxid-Ionen dissoziiert, gilt:

<figure>
    <Formulae> K_W = {c_{H_3O^+}}^2 \;\;\; bzw. \;\;\; K_W = {c_{H^+}}^2 </Formulae>
    <figcaption>H<sub>3</sub>O<sup>+</sup> ist eine Säure, dissoziiert also in Wasser zu Wasser und einem Proton    </figcaption>
</figure>

Das Ionenprodukt bei Raumtemperatur ist $10^{-14}$, damit ist die Konzentration der Oxonium- bzw. Hydroxid-Ionen jeweilt $10^{-7}$. pH- und pOH-Wert sind der negative dekadische Logarithmus der jeweiligen Konzentration.

<Formulae>
    weird bug
</Formulae>
<Formulae>
    pH = -lg( c_{ H^+ } ) \\
    pOH = -lg( c_{ OH^- } )
</Formulae>

Die Protonenkonzentration von Wasser ändert sich durch Zugabe von Säuren (Protonendonatoren) bzw. Basen (Protonenakzeptoren). Bei einem niedrigen pH-Wert (=> höhere Konzentration) als 7 liegt eine saure Lösung vor, bei einem höheren eine basische. Die Summe von pH und pOH ist aber (bei Raumtemperatur) immer 14.

### Säure- bzw. Basendissoziationskonstante

Die Protolyse eine Säure bzw. Base in Wasser ist eine Gleichgewichtsreaktion. Dementsprechend kann man wiederum die Gleichgewichtskonstanten berechnen.

<figure>
    <Formulae> HA \; + \; H_2O \; \rightleftharpoons \; H_3O^+ \; + \; A^- </Formulae>
    <Formulae> K = \frac { c_{ H_3O^+ } * c_{ A^- } } { c_{ H_2O } * c_{ HA } } </Formulae>
    <figcaption>Säure</figcaption>
</figure>

<figure>
    <Formulae> B \; + \; H_2O \; \rightleftharpoons \; HB^+ \; + \; OH^- </Formulae>
    <Formulae> K = \frac { c_{ HB^+ } * c_{ OH^- } } { c_{ H_2O } * c_{ B } } </Formulae>
    <figcaption>Base</figcaption>
</figure>

Da die Konzentration des undissoziierten Wassers wieder als deutlich größer und damit annähernd konstant angenommen werden kann, kann man diese Gleichung zu den Dissoziationskonstanten umformen:

<Formulae>
    weird bug
</Formulae>
<Formulae>
    K_S = \frac { c_{ H_3O^+ } * c_{ A^- } } { c_{ HA } } \\
    pK_S = -lg(K_S) \\
    K_B = \frac { c_{ HB^+ } * c_{ OH^- } } { c_{ B } } \\
    pK_B = -lg(K_B)
</Formulae>

Je kleiner pK<sub>S</sub> bzw. pK<sub>B</sub> ist, desto näher ist die Konzentration bei eins und desto stärker ist die Säure/Base. Säuren mit einem pK<sub>S</sub> dissoziieren in Wasser vollständig, können also nicht in ihrer Stärke unterschieden werden, ohne ein anderes Lösungsmittel zu verwenden. Das Oxonium-Ion ist die stärkste Säure im Wasser. Schwächere Säuren sind nicht vollständig dissoziiert. Mit dem pK<sub>S</sub> bzw. pK<sub>B</sub> kann man den pH-Wert einer sauren oder basischen Lösung berechnen:

<Formulae>
    weird bug
</Formulae>
<Formulae>
    pH = \frac {pK_S - log(c_{ HA })} {2} \\
    pH = 14 - \frac {pK_B - log(c_{ B })} {2}
</Formulae>

Für ein konjugiertes Säure-Basen-Paar ist immer $pK_S + pK_B = 14$, eine starke Säure ist also immer mit einer schwachen Base konjugiert und vice versa.

## Titration

Durch Zusetzen einer Base kann eine Säure neutralisiert werden. Wenn einer unbekannt konzentrierten Säure in kleinen Schritten immer mehr einer bekannten Base (Titrans) zugefügt wird, wird sich der pH-Wert der Lösung zunächst nur geringfügig verändern. Wenn die Konzentrationen von Säure und Base etwa gleich sind, wird der pH-Wert sehr plötzlich umschlagen, bevor er sich wieder langsam seinem neuen Grenzwert annähert. Der Bereich, in dem der pH-Wert umschlägt, wird als Äquivalenzbereich bezeichnet, mit dem Äquivalenzpunkt in der Mitte. Bei gleich starken Säuren und Basen liegt der Äquivalenzpunkt genau beim Neutralpunkt (7 bei Raumtemperatur).

<figure>
    <a title="Roland.chem, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Titration-HCl-HAc.svg"><img width="512" alt="Titration-HCl-HAc" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Titration-HCl-HAc.svg/512px-Titration-HCl-HAc.svg.png"></a>
    <figcaption>Titrationskurven von Salzsäure und Essigsäure mit Natronlauge</figcaption>
</figure>

Der pH-Wert kann zum Beispiel durch einen Indikator sichtbar gemacht werden. Jeder Indikator hat dabei einen typischen Wirkungsbereich, den er messen kann. Den Indikator gibt man der Titrationslösung bei, um zu sehen, wann der pH-Wert umschlägt.

|Indikator|pH-Bereich|Farbe|
|:---:|:---:|:---:|
|Phenolphtalein|8,2 - 10|farblos - rosa|
|Methylorange|3,2 - 4,4|rot - gelb|
|Methylrot|4,8 - 6|gelb - rot|
|Lackmus|5 - 8|rot - blau|
|Alizarin|11 - 12,4|rot - blau|

## Pufferlösungen

Schon kleine Spuren von starken Säuren oder Basen können den pH-Wert einer Lösung stark verändern. Deshalb ist es schwierig, einen bestimmten pH-Wert stabil zu halten, was besonders in biologischen Systemen kritisch sein kann. Pufferlösungen bestehen aus einer schwachen Säure und ihrer konjugierten Base, die bei Zugabe einer Säure protoniert wird.

<figure>
    <Formulae> pH = pK_S + log(\frac {c_{A^-}} {c_{HA}}) </Formulae>
    <figcaption>Henderson-Hasselbach-Gleichung</figcaption>
</figure>

Der Pufferbereich liegt ca. bei $pH = pK_S \pm 1$, also zwischen einem Verhältnis Säure/konjugierte Base von 10/1 bis 1/10. Eine Lösung gilt dann als Pufferlösung, wenn die Zugabe von 13% einer starken Säure oder Base relativ zur Lösung den Pufferbereich nicht verlässt.

|Pufferlösung|pH-Bereich|
|:---:|:---:|
|Kohlensäure/Bicarbonat|6,2 - 8,6|
|Essigsäure/Acetat|3,7 - 5,7|
|NaH<sub>2</sub>PO<sub>4</sub>/Na<sub>2</sub>HPO<sub>4</sub>|5,4 - 8|
|Ammoniak/Ammonium|8,2 - 10,2|

Puffer im Blut sind v.a. proteinbasiert. Aber auch der Kohlensäure/Bicarbonat-Puffer spielt eine wichtige Rolle, weil seine Reaktionsprodukte schnell über die Atmung und den Urin ausgeschieden werden können.

## Wichtige Säuren & Ionen

<!--
@stefnotch
-->

Säure|Summenformel|pK<sub>S</sub>
:-----:|:-----:|:-----:
Salzsäure|$HCl$|-6
Hypochlorige Säure|$HClO$|7,5
Chlorige Säure|$HClO_2$|1,97
Chlorsäure|$HClO_3$|2
Perchlorsäure|$HClO_4$|-10
Flusssäure|$HF$|3,2
Salpetrige Säure|$HNO_2$|3,3
Salpetersäure|$HNO_3$|-1,37
Essigsäure|$CH_3COOH$|4,7
Ameisensäure|$HCOOH$|3,7
Schwefelsäure|$H_2SO_4$|-3; 1,99
Schwefelige Säure|$H_2SO_3$|1,81; 6,99
Schwefelwasserstoff|$H_2S$|7; 12,92
Phosphorsäure|$H_3PO_4$|2,12
Phsophonsäure|$H_3PO_3$|2; 7
Borsäure|$H_3BO_3$|9,24; 12,4; 13,3
Kieselsäure|$H_4SiO_4$|9,84; 13,2
Benzoesäure|$C_6H_5COOH$|4,2
Kohlensäure|$H_2CO_3$|3,6; 10,3
Bromwasserstoff|$HBr$|-8,9
Iodwasserstoff|$HI$|-10

Ion|Summenformel
:---:|:---:
Bromid|$Br^-$
Chlorid|$Cl^-$
Iodid|$I^-$
Flourid|$F^-$
Hydrid|$^-$
Oxid|$O^{2-}$
Sulfid|$S^{2-}$
Silber-Ion|$Ag^+$
Barium-Ion|$Ba^{2+}$
Kupfer(I)-Ion|$Cu^+$
Kupfer(II)-Ion|$Cu^{2+}$
Cobalt(II)-Ion|$Co^{2+}$
Cobalt(III)-Ion|$Co^{3+}$
Nickel(III)-Ion|$Ni^{3+}$
Acetat|$CH_3COO^-$
Cyanid|$CN^-$
Carbonat|$CO_3^{2-}$
Hypochlorit|$ClO^-$
Chlorat|$ClO_3^-$
Perchlorat|$ClO_4^-$
Dichromat|$Cr_2O_7^{2-}$
Formiat|$COO^-$
Azid|$N_3^-$
Nitrit|$NO_2^-$
Nitrat|$NO_3^-$
Peroxid|$O_2^{2-}$
Thiosulfat|$S_2O_3^{2-}$
Hydrogencarbonat|$HCO_3^-$
Hydrogenphosphat|$HPO_4^{2-}$
Dihydrogenphosphat|$H_2PO_4^-$
Hydrogensulfid|$HS^-$
Hydrogensulfit|$HSO_3^-$
Hydrogensulfat|$HSO_4^-$
Iodat|$IO_3^-$
Permanganat|$MnO_4^-$
Hydroxid|$OH^-$
Phosphat|$PO_4^{3-}$
Sulfit|$SO_3^{2-}$
Sulfat|$SO_4^{2-}$
Ammonium|$NH_4^+$

<!--
Thanks! (:
-->
