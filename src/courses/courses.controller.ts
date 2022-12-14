import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {

	constructor(private readonly coursesService: CoursesService) { }

	@Get('list')
	findAll(@Res() response) {
		return this.coursesService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.coursesService.findOne(id);
	}

	@Post()
	@HttpCode(HttpStatus.NO_CONTENT)
	create(@Body() createCourseDto: CreateCourseDto) {
		return this.coursesService.create(createCourseDto);
	}

	@Patch(':id')
	update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
		return this.coursesService.update(id, updateCourseDto);
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.coursesService.remove(id);
	}

}
