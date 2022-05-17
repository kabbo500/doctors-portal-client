import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
import MainButton from '../../Shared/MainButton/MainButton';

const MakeAppointment = () => {

    return (
        <section style={
            {
                background: `url(${appointment})`
            }
        } className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />

            </div>
            <div className='flex-1 px-4'>
                <h3 className='text-lg text-primary'>Appointment</h3>
                <h1 className='text-2xl text-white py-5'>Make an Appointment</h1>
                <p className='text-white pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium possimus aut temporibus perspiciatis provident cupiditate eum cumque dicta quod iste animi explicabo soluta voluptate quo dolor ad, doloribus totam porro quas commodi itaque! Id, laboriosam incidunt explicabo perferendis excepturi provident!</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;