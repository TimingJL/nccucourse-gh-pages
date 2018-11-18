
export const coursesFilter = (courseList, semester, searchParams) => {
    if (searchParams.size) {
        const result = courseList.getIn([semester, 'courses'])
            .filter((course) => {
                const matchArr = searchParams.map((param) => (
                    (course.get('id').indexOf(param) > -1) ||
                    (course.get('instructor').indexOf(param) > -1) ||
                    (course.get('instructor_eng').indexOf(param.toUpperCase()) > -1) ||
                    (course.get('name').indexOf(param) > -1) ||
                    (course.get('asgeneral').indexOf(param) > -1) ||
                    (course.get('change').indexOf(param) > -1) ||
                    (course.get('choose').indexOf(param) > -1) ||
                    (course.get('choose_eng').indexOf(param.toUpperCase()) > -1) ||
                    (course.get('name_eng').indexOf(param.toUpperCase()) > -1) ||
                    (course.get('coregeneral').indexOf(param) > -1) ||
                    (course.get('department').indexOf(param) > -1) ||
                    (course.get('generalclass').indexOf(param) > -1) ||
                    (course.get('language').indexOf(param) > -1) ||
                    (course.get('note').indexOf(param) > -1) ||
                    (course.get('place').indexOf(param) > -1) ||
                    (course.get('session').map((session) => session.get('weekday')).join().indexOf(param) > -1) ||
                    (course.get('session').map((session) => session.get('class')).join().indexOf(param.toUpperCase()) > -1)
                ));
                return !matchArr.toJS().includes(false);
            })
        return result;
    }
    return courseList.getIn([semester, 'courses']);
}

export const sessionFilter = (courses, selectedSession) => {
    if (courses) {
        const filterCourses = courses.filter((course) => {
            let isSelected = false;
            course.get('session').forEach((session) => {
                selectedSession.forEach((selected) => {
                    if (selected.get('weekday') === session.get('weekday')) {
                        if (selected.get('session').includes(session.get('class'))) {
                            isSelected = true;
                        }
                    }
                })
            });
            return isSelected;
        });
        if (filterCourses.size) {
            return filterCourses;
        }
    }
    return courses;
}
