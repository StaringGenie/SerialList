<template lang="pug">
    .content-wrapper
        section
            .container
                h1.ui-title-1 Home
                input(
                    type="text"
                    placeholder="What are you going to watch next ?"
                    v-model="taskTitle"
                    @keyup.enter="newTask"
                )
                textarea(
                    type="text"
                    placeholder="Description(optionally)"
                    v-model="taskDescription"
                )
                .option-list
                    input.what-watch--radio(
                        type="radio"
                        id="radioFilm"
                        value="Film"
                        v-model="whatWatch"
                    )
                    label(
                        for="radioFilm"
                    ) Film
                    input.what-watch--radio(
                        type="radio"
                        id="radioSerial"
                        value="Serial"
                        v-model="whatWatch"
                    )
                    label(
                        for="radioSerial"
                    ) Serial
                .total-time
                    .total-time__film(
                        v-if="whatWatch==='Film'"
                    )

                        span.time-title Hours
                        input.time-input(
                            type="number"
                            v-model="filmHours"
                        )
                        span.time-title Minutes
                        input.time-input(
                            type="number"
                            v-model="filmMinutes"
                        )
                        p {{filmTime}}
                    .total-time__serial(
                        v-if="whatWatch==='Serial'"
                    )
                        span.time-title How many seasons?
                        input.time-input(
                            type="number"
                            v-model="serialSeason"
                        )
                        span.time-title How many series?
                        input.time-input(
                            type="number"
                            v-model="serialSeries"
                        )
                        span.time-title How long is one series? (minutes)
                        input.time-input(
                            type="number"
                            v-model="serialSeriesMinutes"
                        )
                        p {{SerialTime}}
                .tag-list
                    .ui-tag__wrapper(
                        v-for="tag in tags"
                        :key="tag.title"
                    )
                        .ui-tag
                            span.tag-title {{tag.title}}
                            span.button-close
   
          

                                 
                                           
</template>


<script>
export default {
    data() {
        return {
            serialSeason: 0,
            serialSeries: 0,
            serialSeriesMinutes:0,
            filmHours: 0,
            filmMinutes: 0,
            taskTitle: '',
            taskDescription: '',
            taskId: 3,
            whatWatch: 'Film',
            tags: [
                {
                    title: 'Comedy',
                    use: false
                },
                {
                    title: 'Adventure',
                    use: false
                },
                {
                    title: 'Detective',
                    use: false
                },
                {
                    title: 'Drama',
                    use: false
                },
                {
                    title: 'History',
                    use: false
                },
                {
                    title: 'Melodrama',
                    use: false
                },
                {
                    title: 'Tragedy',
                    use: false
                },
                {
                    title: 'Fantasy',
                    use: false
                },
            ]
           
        }
    },
    
    methods:{
        newTask(){
            if(this.taskTitle === ''){
                return
            }    
            let time 
            if(this.whatWatch === 'Film'){
                time = this.filmTime
            } else{
                time = this.SerialTime
            }
            this.tasks.push({
                id: this.taskId++,
                title: this.taskTitle,
                description: this.taskDescription,
                whatWatch: this.whatWatch,
                time,
                completed: false,
                editing: false
            })
            this.taskTitle = ''
            this.taskDescription = ''
        },

        getHoursAndMinutes (minutes){
            let hours = Math.trunc(minutes / 60)
            let min = minutes % 60
            return hours + ' Hours '+ min + ' Minutes '
        }
    },

    computed: {
        filmTime (){
            let min = (this.filmHours * 60) + (this.filmMinutes * 1)
            return this.getHoursAndMinutes(min)
        },
        SerialTime (){
            let min = this.serialSeason*this.serialSeries*this.serialSeriesMinutes
            return this.getHoursAndMinutes(min)
        }
    }
        
}
</script>

<style lang="stylus" scoped>
.total-time
    margin-bottom 20px
.time-title
    display block
    margin-bottom 8px
.time-input
    max-width 70px
    margin-right 15px        
.button-close
    width 20px
    height @width

.option-list
    display flex
    .what-watch--radio
        margin-right 12px
    label
        margin-right 20px       
        &:last-child
            margin-bottom 0
</style>
