import gulp from 'gulp';
const { src, dest } = gulp;
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import gulpWebp from 'gulp-webp';

const opciones = {
    quality: 50
};

const opcionesMin = {
    optimizationLevel: 3
}

gulp.task('versionWebp', () =>
    src('public/img/**/*')
        .pipe(gulpWebp(opciones))
        .pipe(dest('public/imgSimp'))
);

gulp.task('versionMin', () =>
    src('public/img/**/*')
        .pipe(cache(imagemin(opcionesMin)))
        .pipe(dest('public/imgSimp'))
);


