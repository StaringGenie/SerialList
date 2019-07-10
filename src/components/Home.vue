<template lang="pug">
    .content-wrapper
        section
            .container
                h1.ui-title-1 Home
        section
            .container
                .task-list
                    .task-item(
                        v-for="task in tasks"
                        :key="task.id"
                        :class="{completed: task.completed}"
                    )
                        .ui-card.ui-card--shadow  
                            .task-item__info
                                .task-item__main-info
                                    span.ui-label.ui-label--light {{task.whatWatch}}
                                    span Total Time:
                                span.button-close
                                 
                                           
</template>


<script>
export default {
    data() {
        return {
            tasks:[
                {
                    id: 1,
                    title: 'Game of Thrones',
                    description: 'winther is comming...',
                    whatWatch: 'Serial',
                    completed: true,
                    editing: false
                },
                 {
                    id: 2,
                    title: 'Forest Gump',
                    description: 'Run, Forest',
                    whatWatch: 'Film',
                    completed: false,
                    editing: false
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
.button-close
    width 20px
    height @width
.task-item__info
    margin-bottom 20px
    justify-content space-between
    display flex
    align-items center
.task-item
    margin-bottom 20px
    &:last-child
        margin-bottom 0
.ui-label
    margin-right 8px
</style>
