const lightsaberItems = [
  { name: "⚪Simple White Lightsaber", price: 500, bladeId: "item-lightsaber-blade", fullDescription: `
    <div class="main-info">
            <div class="lighsaber-image-div">
                <div class="info-lightsaber-blade"></div>
                <img src="images/lightsaber-hilt.png" class="info-lightsaber-hilt">
            </div>
            <div class="info-lightsaber-description">
                <h1>⚪ SIMPLE WHITE LIGHTSABER</h1>
                <h4 class="description">
                    
                    <br>Elegance in its purest form.

                    <br>Crafted for those who value clarity
                    
                    <br>and precision, the Simple White Lightsaber embodies 
                    
                    <br>minimalist design with maximum impact. Its radiant 
                    
                    <br>white blade glows with serene intensity, 
                    
                    <br>symbolizing balance, neutrality, and unwavering focus. 
                    
                    <br>The hilt features a sleek metallic 
                    
                    <br>finish with subtle detailing—engineered for comfort, and timeless style.
                    
                    <br>Whether you're customizing your arsenal or seeking your
                    
                    <br>first saber, this model offers a clean 
                    
                    <br>aesthetic and reliable performance. No frills. Just force.



                    <ul>
                        <br>Specifications:
                        <li>Length: 36 inches</li>
                        <li>Weight: 1.2 lbs</li>
                        <li>Activation: Push-button ignition</li>
                        <li>Sound: Crisp hum with dynamic pitch modulation</li>
                        <li>Blade Color: Pure white</li>
                        <li>Hilt Material: Brushed durasteel</li>
                        <li>Ideal For: Guardians and seekers</li>
                        <li>Power Core: Kyber crystal calibrated for stability</li>
                        <li>Combat Form: Versatile for all forms</li>
                        <li>Price: 500 credits</li>
                    </ul>
                    
                </h4>
            </div>
        </div>
        <div class="info-button-div">
            <button class="info-button-buy" onclick="buyOneItem()">Buy</button>
            <button class="info-button-buy" onclick="addToCart(
  'SIMPLE WHITE LIGHTSABER',
  500,
  'images/lightsaber-hilt.png',
  'item-lightsaber-blade'
)">Add to Cart</button>
        </div>
    `
   },
  { name: "🔵 AZURE GUARDIAN SABER", price: 550, bladeId: "item-lightsaber-blade-1", fullDescription: `
    <div class="main-info">
            <div class="lighsaber-image-div">
                <div class="lighsaber-image">
                    <div class="info-lightsaber-blade-2 info-lightsaber-blade"></div>
                    <img src="images/lightsaber-hilt.png" class="info-lightsaber-hilt">
                </div>
            </div>
            <div class="info-lightsaber-description">
                <h1>🔵 AZURE GUARDIAN SABER</h1>
                <h4 class="description">
                    <br>Clarity through discipline.
                    
                    <br>Forged for Jedi Guardians who embody courage and precision, 
                    
                    <br>this saber channels the focused energy of a blue kyber crystal. 
                    
                    <br>Its blade is a beacon of justice, ideal for those who master 
                    
                    <br>Form V: Shien/Djem So — a style built on strength, counterattacks, and tactical dominance. 
                    
                    <br>Whether defending the innocent or dueling with honor, this saber delivers unwavering performance.

                    <ul>
                        <br>Specifications:
                        <li>Length: 36 inches</li>
                        <li>Weight: 1.3 lbs</li>
                        <li>Activation: Push-button ignition</li>
                        <li>Sound: Push ignition with harmonic pitch feedback</li>
                        <li>Blade Color: Blue</li>
                        <li>Hilt Material: Polished durasteel with cobalt inlay</li>
                        <li>Ideal For: Great warrior of the jedi's</li>
                        <li>Power Core: Kyber crystal calibrated for combat precision</li>
                        <li>Combat Form: Form V – Shien/Djem So (Powerful, aggressive, defensive counters)</li>
                        <li>Price: 550 credits</li>
                    </ul>
                    
                </h4>
            </div>
        </div>
        <div class="info-button-div">
            <button class="info-button-buy" onclick="buyOneItem()">Buy</button>
            <button class="info-button-buy" onclick="addToCart(
  'AZURE GUARDIAN SABER',
  550,
  'images/lightsaber-hilt.png',
  'item-lightsaber-blade-1'
)">Add to Cart</button>

        </div>
    `},
  { name: "🟢 VERDANT CONSULAR SABER", price: 600, bladeId: "item-lightsaber-blade-2", fullDescription: `
    <div class="main-info">
            <div class="lighsaber-image-div">
                <div class="info-lightsaber-blade-3 info-lightsaber-blade"></div>
                <img src="images/lightsaber-hilt.png" class="info-lightsaber-hilt">
            </div>
            <div class="info-lightsaber-description">
                <h1>🟢 VERDANT CONSULAR SABER </h1>
                <h4 class="description">
                    <br>Wisdom rooted in nature.
                    
                    <br>This green-bladed saber is the choice of Jedi Consulars who seek 
                    
                    <br>peace through knowledge and diplomacy. Its vibrant hue reflects 
                    
                    <br>harmony and deep Force attunement. Designed for practitioners of 
                    
                    <br>Form III: Soresu, the ultimate defensive style, this saber excels in deflection, 
                    
                    <br>endurance, and calm control — perfect for those who protect without aggression.

                    <ul>
                        <br>Specifications:
                        <li>Length: 35 inches</li>
                        <li>Weight: 1.1 lbs</li>
                        <li>Activation: Push-button ignition</li>
                        <li>Sound: Push-button ignition with ambient forest modulation</li>
                        <li>Blade Color: Green</li>
                        <li>Hilt Material: Brushed durasteel with moss-tone accents</li>
                        <li>Ideal For: Guardians and seekers</li>
                        <li>Power Core: Kyber crystal tuned for wisdom resonance</li>
                        <li>Combat Form: Form III – Soresu (Defensive mastery, energy conservation)</li>
                        <li>Price: 600 credits</li>
                    </ul>
                    
                </h4>
            </div>
        </div>
        <div class="info-button-div">
            <button class="info-button-buy" onclick="buyOneItem()">Buy</button>
            <button class="info-button-buy" onclick="addToCart(
  'VERDANT CONSULAR SABER',
  600,
  'images/lightsaber-hilt.png',
  'item-lightsaber-blade-2'
)">Add to Cart</button>
        </div>
    </main>`},
  { name: "🟣 AMETHYST BALANCE SABER", price: 700, bladeId: "item-lightsaber-blade-3", fullDescription: `
    <div class="main-info">
            <div class="lighsaber-image-div">
                <div class="info-lightsaber-blade-4 info-lightsaber-blade"></div>
                <img src="images/lightsaber-hilt.png" class="info-lightsaber-hilt">
            </div>
            <div class="info-lightsaber-description">
                <h1>🟣 AMETHYST BALANCE SABER</h1>
                <h4 class="description">
                    <br>Mystery meets mastery.
                    
                    <br>Rare and commanding, this purple saber is favored by Jedi who walk the 
                    
                    <br>line between light and dark. Its deep glow reflects inner strength and emotional control. 
                    
                    <br>Ideal for wielders of Form VII: Vaapad, a style that channels intense emotion into focused combat. 
                    
                    <br>This saber is not for the faint-hearted — it demands discipline, clarity, and conviction.

                    <ul>
                        <br>Specifications:
                        <li>Length: 37 inches</li>
                        <li>Weight: 1.25 lbs</li>
                        <li>Activation: Push-button ignition</li>
                        <li>Sound: Push ignition with echo modulation</li>
                        <li>Blade Color: Purple</li>
                        <li>Hilt Material: Matte durasteel with violet shimmer coating</li>
                        <li>Ideal For: Great warriors of the order</li>
                        <li>Power Core: Kyber crystal attuned to mystic frequency</li>
                        <li>Combat Form: Form VII – Vaapad (Intense, emotional, high-risk mastery)</li>
                        <li>Price: 700 credits</li>
                    </ul>
                    
                </h4>
            </div>
        </div>
        <div class="info-button-div">
            <button class="info-button-buy" onclick="buyOneItem()">Buy</button>
            <button class="info-button-buy" onclick="addToCart(
  'AMETHYST BALANCE SABER',
  700,
  'images/lightsaber-hilt.png',
  'item-lightsaber-blade-3'
)">Add to Cart</button>
        </div>`},
  { name: "🟡 GOLDEN SENTINEL SABER", price: 850, bladeId: "item-lightsaber-blade-4", fullDescription: `<div class="main-info">
            <div class="lighsaber-image-div">
                <div class="info-lightsaber-blade-5 info-lightsaber-blade"></div>
                <img src="images/lightsaber-hilt.png" class="info-lightsaber-hilt">
            </div>
            <div class="info-lightsaber-description">
                <h1>🟡 GOLDEN SENTINEL SABER</h1>
                <h4 class="description">
                    <br>Vigilance in motion.
                    
                    <br>This yellow saber shines with the light of guardianship and adaptability. 
                    
                    <br>Used by Jedi Sentinels and Temple Guards, it reflects balance between combat and intellect. 
                    
                    <br>Suited for Form VI: Niman, a hybrid style that blends offense, defense, and Force techniques. 
                    
                    <br>This saber is perfect for those who operate in the shadows, investigate mysteries, and protect the unseen.

                    <ul>
                        <br>Specifications:
                        <li>Length: 35.5 inches</li>
                        <li>Weight: 1.2 lbs</li>
                        <li>Activation: Push-button ignition</li>
                        <li>Sound: Push ignition with flowing pitch modulation</li>
                        <li>Blade Color: Yellow</li>
                        <li>Hilt Material: Satin durasteel with golden accents</li>
                        <li>Ideal For: Temple guards and sentinels</li>
                        <li>Power Core: Kyber crystal calibrated for harmonic balance</li>
                        <li>Form VI – Niman (Balanced, versatile, Force-integrated)</li>
                        <li>Price: 850 credits</li>
                    </ul>
                    
                </h4>
            </div>
        </div>
        <div class="info-button-div">
            <button class="info-button-buy" onclick="buyOneItem()">Buy</button>
            <button class="info-button-buy" onclick="addToCart(
  'GOLDEN SENTINEL SABER',
  850,
  'images/lightsaber-hilt.png',
  'item-lightsaber-blade-4'
)">Add to Cart</button>
        </div>
    `},
  { name: "🟣 MAGENTA PATHFINDER SABER", price: 900, bladeId: "item-lightsaber-blade-5", fullDescription: `
    <div class="main-info">
            <div class="lighsaber-image-div">
                <div class="info-lightsaber-blade-6 info-lightsaber-blade"></div>
                <img src="images/lightsaber-hilt.png" class="info-lightsaber-hilt">
            </div>
            <div class="info-lightsaber-description">
                <h1>🟣 MAGENTA PATHFINDER SABER</h1>
                <h4 class="description">
                    <br>Individuality with purpose.
                    
                    <br>This magenta saber is a symbol of emotional clarity and personal expression. 
                    
                    <br>Though rare in canon, it resonates with Jedi who forge their own path. 
                    
                    <br>Best paired with Form IV: Ataru, a dynamic and acrobatic style that emphasizes speed, 
                    
                    <br>agility, and unpredictability. This saber is for those who move with grace and fight with heart

                    <ul>
                        <br>Specifications:
                        <li>Length: 34.5 inches</li>
                        <li>Weight: 1.15 lbs</li>
                        <li>Activation: Push-button ignition</li>
                        <li>Sound: Push ignition with kinetic pitch modulation</li>
                        <li>Blade Color: Magenta</li>
                        <li>Hilt Material: Lightweight durasteel with magenta glow accents</li>
                        <li>Ideal For: Great warriors of the order</li>
                        <li>Power Core: Kyber crystal tuned for emotional resonance</li>
                        <li>Combat Form: Form IV – Ataru (Agile, acrobatic, fast-paced combat)</li>
                        <li>Price: 750 credits</li>
                    </ul>
                    
                </h4>
            </div>
        </div>
        <div class="info-button-div">
            <button class="info-button-buy" onclick="buyOneItem()">Buy</button>
            <button class="info-button-buy" onclick="addToCart(
  'MAGENTA PATHFINDER SABER',
  900,
  'images/lightsaber-hilt.png',
  'item-lightsaber-blade-5'
)">Add to Cart</button>
        </div>`},
];