<template lang="pug">
    .content-wrapper
        section
            .container
                h1.ui-title-1 Tasks
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
                            .task-item__content
                                .task-item__header
                                    .ui-checkbox-wrapper
                                        input.ui-checkbox(
                                            type='checkbox'
                                            v-model="task.completed"
                                        )
                                    span.ui-title-3 {{ task.title }}
                                .task-item__body 
                                    p.ui-text-regular {{task.description}} 
</template>


<script>
export default {
    data() {
        return {
            tasks:[
                {
                    id: 1,
                    title: 'Game of Thrones',
                    description: 'winter is coming...',
                    whatWatch: 'Serial',
                    completed: true,
                    editing: false
                },
                 {
                    id: 2,
                    title: 'Forrest Gump',
                    description: 'Run, Forrest',
                    whatWatch: 'Film',
                    completed: false,
                    editing: false
                }
            ] 
        }
    },
}
</script>

<style lang="stylus" scoped>
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
.task-item__header
    display flex
    align-items center
    margin-bottom 18px
    .ui-checkbox-wrapper
        margin-right 8px     
    .ui-title-3
        margin-bottom 0
</style>
