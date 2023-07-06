class Story {
    constructor(name, length, moralLessons, ageGroup, language) {
        this.name = name;
        this.length = length;
        this.moralLessons = moralLessons;
        this.ageGroup = ageGroup;
        this.language = language;
    }
   
   
    displayProperties() {
        return `Story name: ${this.name}, Story length: ${this.length}, Language: ${this.language}, Age Group: ${this.ageGroup.join('-')} and Moral lessons: ${this.moralLessons}`;
    }
   }
   
   
   class StoryTeller extends Story {
    constructor(length, moralLessons, ageGroup) {
        super('', length, moralLessons, ageGroup, '');
        this.length = length;
        this.moralLessons = moralLessons;
        this.ageGroup = ageGroup;
    }
   
   
    isAppropriate(age) {
        if (age >= this.ageGroup[0] && age <= this.ageGroup[1]) {
            return "Is appropriate to hear";
        } else {
            return "Inappropriate to hear";
        }
    }
   
   
    gaugeAttentionSpan(maxLength) {
        if (maxLength >= this.length) {
            return "The audience can be attentive throughout the story";
        } else {
            return "The audience will get bored";
        }
    }
   
   
    appropriateMoralLesson(lesson) {
        if (lesson === this.moralLessons) {
            return "Is appropriate to hear";
        } else {
            return "Inappropriate to hear";
        }
    }
   }
   
   
   class Translator extends Story {
    constructor(name, length, moralLessons, ageGroup, language) {
      super(name, length, moralLessons, ageGroup, language);
    }
   
   
    translateStory(audienceLanguage) {
        if (audienceLanguage !== this.language) {
            return "Translate story";
        } else {
            return "No need to translate";
        }
    }
   }
   
   
   let story1 = new Story("Blood", 400, "sex education", [14, 18], "English");
   console.log(story1.displayProperties());
   
   
   let person1 = new StoryTeller(200, "religion", [5, 10]);
   console.log(person1.appropriateMoralLesson("patience"));
   console.log(person1.isAppropriate(17));
   console.log(person1.gaugeAttentionSpan(300));
   
   
   let audience1 = new Translator("Kiluhya");
   console.log(audience1.translateStory("French"));