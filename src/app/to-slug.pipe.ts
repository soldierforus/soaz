import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSlug',
  standalone: true
})
export class ToSlugPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // Convert to lowercase
    let slug = value.toLowerCase();

    // Replace spaces with hyphens
    slug = slug.replace(/\s+/g, '-');

    // Remove special characters
    slug = slug.replace(/[^\w\-]+/g, '');

    // Remove duplicate hyphens
    slug = slug.replace(/\-\-+/g, '-');

    // Trim hyphens from start and end
    slug = slug.replace(/^-+|-+$/g, '');

    return slug;
  }
}
