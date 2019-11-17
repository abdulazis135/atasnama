      <script>
            var match;
            var chords = [&#39;C&#39;, &#39;C#&#39;, &#39;D&#39;, &#39;Eb&#39;, &#39;E&#39;, &#39;F&#39;, &#39;F#&#39;, &#39;G&#39;, &#39;Ab&#39;, &#39;A&#39;, &#39;Bb&#39;, &#39;B&#39;, &#39;C&#39;, &#39;Db&#39;, &#39;D&#39;, &#39;D#&#39;, &#39;E&#39;, &#39;F&#39;, &#39;Gb&#39;, &#39;G&#39;, &#39;G#&#39;, &#39;A&#39;, &#39;A#&#39;, &#39;C&#39;];
            var chordRegex = /C#|D#|F#|G#|A#|Db|Eb|Gb|Ab|Bb|C|D|E|F|G|A|B/g;
            $(&#39;#transposeUp, #transposeUp1&#39;).click(function() {
                $(&#39;.c&#39;).each(function() {
                    var currentChord = $(this).text();
                    var output = &quot;&quot;;
                    var parts = currentChord.split(chordRegex);
                    var index = 0;
                    while (match = chordRegex.exec(currentChord)) {
                        var chordIndex = chords.indexOf(match[0]);
                        output += parts[index++] + chords[chordIndex + 1];
                    }
                    output += parts[index];
                    $(this).text(output);
                });
            });
            $(&#39;#transposeDown, #transposeDown1&#39;).click(function() {
                $(&#39;.c&#39;).each(function() {
                    var currentChord = $(this).text();
                    var output = &quot;&quot;;
                    var parts = currentChord.split(chordRegex);
                    var index = 0;
                    while (match = chordRegex.exec(currentChord)) {
                        var chordIndex = chords.indexOf(match[0], 1);
                        output += parts[index++] + chords[chordIndex - 1];
                    }
                    output += parts[index];
                    $(this).text(output);
                });
            });           
        </script>
