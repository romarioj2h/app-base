<template>
    <q-page class="flex flex-center">
        <div class="layout-padding row justify-center q-banner--top-padding">
            <div style="width: 500px; max-width: 90vw;">
                <div align="center">
                    <img src="~assets/quasar-logo-full.svg" alt="" style="height: 128px">
                </div>
                <q-card flat bordered class="my-card">
                    <q-card-section>
                        <div class="text-h6">{{ $t('appName')}} v1.0</div>
                    </q-card-section>

                    <q-card-section>
                        <p class="text-justify text-body2">
                            {{ $t('about')}} <q-icon name="mood"/>
                        </p>
                        <p class="text-justify text-body2">
                            {{ $t('rateText')}}
                        </p>
                    </q-card-section>

                    <q-separator inset />

                    <q-card-section>
                        <q-btn type="a" href="https://play.google.com/store/apps/developer?id=Huebra+Developer" target="_blank" color="primary" icon-right="launch" :label="$t('moreApps')" class="on-left multiple-btn" />
                        <q-btn type="a" href="https://play.google.com/store/apps/details?id=com.huebradeveloper.billings" target="_blank" color="primary" icon-right="star" :label="$t('rate')" class="multiple-btn" />
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<style>
    .multiple-btn {
        margin-bottom: 10px;
    }
</style>
