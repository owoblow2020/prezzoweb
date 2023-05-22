# Generated by Django 4.1.7 on 2023-03-25 13:43

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_blog_options_blog_banner_alter_blog_article_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ['-timestamp']},
        ),
        migrations.RemoveField(
            model_name='blog',
            name='banner',
        ),
        migrations.AlterField(
            model_name='blog',
            name='article',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='blog',
            name='subtitle',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
