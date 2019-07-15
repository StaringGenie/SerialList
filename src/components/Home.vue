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

                .tag-list.tag-list--add
                    .ui-tag__wrapper(
                        @click="tagMenuShow=!tagMenuShow"
                    )
                        .ui-tag
                            span.tag-title Add New Tag
                            span.button-close(
                                :class="{active: !tagMenuShow}"
                            ) 
                .tag-list.tag-list--menu(
                    v-if="tagMenuShow"
                )  
                    input.tag-add--input(
                        type="text"
                        placeholder="New Tag"
                        v-model="tagTitle"
                        @keyup.enter="newTag"
                    )
                    .button.button-default(
                        @click="newTag"
                    ) Send                 
                .tag-list
                    .ui-tag__wrapper(
                        v-for="tag in tags"
                        :key="tag.title"
                    )
                        .ui-tag(
                            @click="addTagUsed(tag)"
                            :class="{used:tag.use}"
                        )
                            span.tag-title {{tag.title}}
                            span.button-close
                .button.button--round.button-primary(
                    @click="newTask"
                ) Send    
   
          

                                 
                                           
</template>


<script>
export default {
    data() {
        return {
            tagMenuShow: false,
            tagTitle: '',
            serialSeason: 0,
            serialSeries: 0,
            serialSeriesMinutes:0,
            filmHours: 0,
            filmMinutes: 0,
            taskTitle: '',
            taskDescription: '',
            taskId: 3,
            whatWatch: 'Film',
            usedTags: [],
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
        newTag(){
            if(this.tagTitle === ''){
                return
            }
            // eslint-disable-next-line
           const tag =(   
                {
                    title: this.tagTitle,
                    use: true
                }
            )
            this.tagTitle = ''
        },
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

            this.tags.forEach(element => {
                element.use = false
            });

            // eslint-disable-next-line
            const task = ({
                id: this.taskId++,
                title: this.taskTitle,
                description: this.taskDescription,
                whatWatch: this.whatWatch,
                time,
                usedTags: this.usedTags,
                completed: false,
                editing: false
            })
            this.taskTitle = ''
            this.taskDescription = ''
            this.usedTags = []
            
        },

        getHoursAndMinutes (minutes){
            let hours = Math.trunc(minutes / 60)
            let min = minutes % 60
            return hours + ' Hours '+ min + ' Minutes '
        },

        addTagUsed (tag){
            tag.use = !tag.use
            if(tag.use){
                this.usedTags.push(tag.title)
            } else {
                this.usedTags.splice(this.usedTags.indexOf(tag.title), 1)
            }
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
.tag-list
    margin-bottom 20px
.ui-tag__wrapper
    margin-right 18px
    margin-bottom 10px
    &:last-child
        margin-right 0  
.ui-tag
    cursor pointer
    background-color #fff
    color #000
    .button-close
        &.active
            transform: rotate(45deg) 
    &.used
        background-color: #444ce0
        color #fff 
        .button-close
            &:before,
            &:after
                background-color: #fff
.tag-list--menu
    display flex
    justify-content space-between
    align-items center
.tag-add--input
    margin-bottom 0
    margin-right 10px
    height 40px                                 
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
