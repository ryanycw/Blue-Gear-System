# Generated by Django 3.1.4 on 2020-12-09 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0004_auto_20201209_0709'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='bgp_class',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='cur_city',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='cur_country',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='grad_class',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='grad_dep',
            field=models.CharField(max_length=50, null=True),
        ),
    ]